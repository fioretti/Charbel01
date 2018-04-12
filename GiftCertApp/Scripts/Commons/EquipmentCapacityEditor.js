import React, { PropTypes } from 'react'
import BootstrapModal from 'react-bootstrap-modal'
import { fromJS } from 'Immutable'
import * as dataUtils from 'Utils/DataUtils'
import classnames from 'classnames'

export default class Modal extends React.Component {

  constructor() {
    super()

    this.onConfirm = this.onConfirm.bind(this)
    this.onAbort = this.onAbort.bind(this)

    this.onNumericFieldChanged = this.onNumericFieldChanged.bind(this)
    this.onFieldChanged = this.onFieldChanged.bind(this)

    this.state = {
      isProcessing: false,
      schedule: fromJS({}),
      isBaseHourValid: true
    }
  }

  componentDidMount() {
    this.promise = new $.Deferred();
    $(this.refs.Modal).modal({
      show: true
    })

    this.setState({
      ...this.state,
      schedule: this.props.schedule
    })
  }

  onFieldChanged(name, e) {
    this.setState({
      ...this.state,
      schedule: this.state.schedule.set(name, e.target.value)
    })
  }

  onNumericFieldChanged(name, e) {
    var value = e.target.value;

    if (value == undefined || value == null || value == '') {
      value = 0
    }

    this.setState({
      ...this.state,
      schedule: this.state.schedule.set(name, value)
    })
  }

  onConfirm(e) {
    e.preventDefault();
    $(this.refs.Modal).on('hidden.bs.modal', (e) => {
      return this.promise.resolve();
    })

    const baseHours = this.state.schedule.get('baseHours')
    const isBaseHourValid = !dataUtils.isEmpty(baseHours)
      && baseHours > 0

    const hasError = !isBaseHourValid

    this.setState({
      ...this.state,
      isProcessing: !hasError,
      isBaseHourValid: isBaseHourValid
    })

    if (hasError){
      return;
    }

    this.props.onSuccess(this.state.schedule, () => {
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

    const baseHoursInputDivClass = classnames('col-xs-8', {
      'has-error': !this.state.isBaseHourValid
    })

    return (
      <div className='modal fade' role='dialog' ref='Modal'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' onClick={this.onAbort}><span aria-hidden='true'>&times;</span></button>
              <h4 className='modal-title'>{this.props.title}</h4>
            </div>
            <div className='modal-body'>
              <form className='form-horizontal'>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>Base Hours</label>
                    <div className={baseHoursInputDivClass}>
                      <input type='number' step='any' className='form-control' value={this.state.schedule.get('baseHours')}
                        onChange={_.partial(this.onNumericFieldChanged, 'baseHours')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>Down Time</label>
                    <div className='col-xs-8'>
                      <input type='number' step='any' className='form-control' value={this.state.schedule.get('downtime')}
                        onChange={_.partial(this.onNumericFieldChanged, 'downtime')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>Comments</label>
                    <div className='col-xs-8'>
                      <textArea className='form-control' value={this.state.schedule.get('comment')}
                        onChange={_.partial(this.onFieldChanged, 'comment')} />
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
  condition: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired
}
