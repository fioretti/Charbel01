import React, { PropTypes } from 'react'
import BootstrapModal from 'react-bootstrap-modal'
import classnames from 'classnames'

import * as dataUtils from 'Utils/DataUtils'

export default class Modal extends React.Component {

  constructor() {
    super()

    this.onConfirm = this.onConfirm.bind(this)
    this.onAbort = this.onAbort.bind(this)

    this.state = {
      isProcessing: false
    }
  }

  componentDidMount() {
    this.promise = new $.Deferred();
    $(this.refs.Modal).modal({
      show: true
    })
  }

  onConfirm(e) {
    e.preventDefault();
    $(this.refs.Modal).on('hidden.bs.modal', (e) => {
      return this.promise.resolve();
    })

    const note = $(this.refs.note).val();

    if (dataUtils.isEmpty(note)) {
      this.setState({
        ...this.state,
        isError: true
      })

      return;
    }

    if(!dataUtils.isValidUrl(note)) {
      this.setState({
        ...this.state,
        isError: true
      })

      return;
    }

    this.setState({
      ...this.state,
      isError: false,
      isProcessing: true
    })

    this.props.onSuccess(note, () => {
      this.closeModal();
    })
  }

  onAbort(e) {
    this.closeModal()

    $(this.refs.Modal).on('hidden.bs.modal', (e) => {
      return this.promise.reject();
    })
  }

  closeModal() {
    $(this.refs.Modal).modal('hide')
  }

  render() {
    let actionButtonStyle = {}
    let loadingIndicator

    if (this.state.isProcessing) {
      actionButtonStyle.disabled = 'disabled'

      loadingIndicator = (
        <i className='fa fa-spin fa-spinner' />
      )
    }

    const inputDivClass = classnames('col-xs-12', {
      'has-error': this.state.isError
    })

    const style = {
      message: {
        marginBottom: '15px'
      },
      testAreaStyle: {
        resize: 'vertical'
      }
    }

    let noteProps = {}

    if(this.props.maxLength) {
      noteProps.maxLength = this.props.maxLength
    }

    if(this.props.value) {
      noteProps.defaultValue = this.props.value
    }

    return (
      <div className='modal fade' role='dialog' ref='Modal'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <form className='form-horizontal'>
              <div className='modal-header'>
                <button type='button' className='close' onClick={this.onAbort}><span aria-hidden='true'>&times;</span></button>
                <h4 className='modal-title'>{this.props.title}</h4>
              </div>
              <div className='modal-body'>
                <p style={style.message}>{this.props.message}</p>
                <div className='form-group'>
                  <div className={inputDivClass}>
                    <input type='text' className='form-control' ref='note'
                      placeholder={this.props.placeholder} {...noteProps} />
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button type='submit' className='btn btn-primary' {...actionButtonStyle} onClick={this.onConfirm}>{loadingIndicator} Confirm</button>
                <button type='button' className='btn btn-link' {...actionButtonStyle} onClick={this.onAbort}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Modal.props = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired
}
