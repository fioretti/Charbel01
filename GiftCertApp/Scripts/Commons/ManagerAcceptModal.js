import React, { PropTypes } from 'react'
import BootstrapModal from 'react-bootstrap-modal'
import classnames from 'classnames'

import { fromJS } from 'Immutable'
import * as dataUtils from 'Utils/DataUtils'

export default class Modal extends React.Component {

  constructor() {
    super()

    this.onConfirm = this.onConfirm.bind(this)
    this.onAbort = this.onAbort.bind(this)
    this.onSubTypeChanged = this.onSubTypeChanged.bind(this)

    this.state = {
      isProcessing: false,
      subRequestType: fromJS({ id: 0 })
    }
  }

  componentDidMount() {
    this.promise = new $.Deferred();
    $(this.refs.Modal).modal({
      show: true
    })

    this.setState({
      ...this.state,
      subRequestType: this.props.subRequestType
    })
  }

  onSubTypeChanged(e) {
    const subRequestTypeVal = parseInt($(this.refs.subRequestType).val());
    this.setState({
      ...this.state,
      subRequestType: fromJS({
        id: subRequestTypeVal,
        name: $('option:selected', this.refs.subRequestType).text()
      })
    })
  }

  onConfirm(e) {
    e.preventDefault();
    $(this.refs.Modal).on('hidden.bs.modal', (e) => {
      return this.promise.resolve();
    })

    const subRequestType = this.state.subRequestType.toJS();

    if (subRequestType.id == 0) {
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

    this.props.onSuccess(this.state.subRequestType.toJS(), () => {
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
      }
    }

    const value = this.state.subRequestType != undefined ? this.state.subRequestType.get('id') : 0;

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
                    <select className='form-control' ref='subRequestType'
                      onChange={this.onSubTypeChanged}
                      value={value}>
                      <option value='0'>Please select a sub request type</option>
                      {
                        this.props.subRequestTypes.map((item, idx) => {
                          return (<option value={item.get('id')} key={idx}>{item.get('name')}</option>)
                        })
                      }
                    </select>
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
  subRequestType: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired
}
