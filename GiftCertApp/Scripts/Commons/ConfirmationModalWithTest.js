import React, { PropTypes } from 'react'
import BootstrapModal from 'react-bootstrap-modal'
import classnames from 'classnames'

import * as dataUtils from 'Utils/DataUtils'
import TestStatus from './TestStatus'

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

    let selectedTests = [];

    $('input:checked').each((idx, item) => {
      var id = parseInt(item.value);
      selectedTests.push(this.props.testSelections.filter((testSelection) => {
        return testSelection.testDataId == id
      })[0])
    })

    let hasError = false;
    const isTestNotSelected = selectedTests.length == 0

    let state = this.state;

    if ( isTestNotSelected) {
      hasError = true;
    }

    state.isTestNotSelected = isTestNotSelected;

    if (hasError) {
      this.setState({
        ...state
      })
      return;
    }

    this.setState({
      ...state,
      isProcessing: true
    })

    this.props.onSuccess(selectedTests, () => {
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

    let listErrorMessage = (<i/>)

    if(this.state.isTestNotSelected) {
      listErrorMessage = (
        <div className='alert alert-danger' role='alert'>
          At least one test must be selected
        </div>
      )
    }

    const style = {
      list: {
        height: '100px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }

    return (
      <div className='modal fade' role='dialog' ref='Modal'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' onClick={this.onAbort}><span aria-hidden='true'>&times;</span></button>
              <h4 className='modal-title'>{this.props.title}</h4>
            </div>
            <div className='modal-body'>
              <p style={style.message}>{this.props.message}</p>
              <form className='form-horizontal'>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    {listErrorMessage}
                    <div style={style.list} ref='tests'>
                    {
                      this.props.testSelections
                        .sort((first, second) => {
                          if (first.name < second.name) {
                            return -1
                          }

                          if (first.name > second.name) {
                            return 1
                          }

                          return 0
                        })
                        .map((item, idx) => {
                          let chckboxProps = {}
                          let labelProps = {}

                          if (!item.canReject) {
                            chckboxProps.disabled = true;

                            labelProps = {
                              title: 'Test is not in the correct state to be selected',
                              className: 'disabled-text'
                            }
                          }
                          return (
                            <div className='col-xs-6 checkbox' key={idx}>
                              <label {...labelProps}>
                                <input type='checkbox' value={item.testDataId} {...chckboxProps} /> {item.name} (<TestStatus value={item.status} />)
                              </label>
                            </div>
                          )
                      })
                    }
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' {...actionButtonStyle} onClick={this.onConfirm}>{loadingIndicator} Confirm</button>
              <button type='button' className='btn btn-link' {...actionButtonStyle} onClick={this.onAbort}>Close</button>
            </div>
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
