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
      subType: fromJS({}),
      timeTstValid: true,
      timeDspValid: true,
      timeTstPrevValid: true,
      timeDspPrevValid: true,
    }
  }

  componentDidMount() {
    this.promise = new $.Deferred();
    $(this.refs.Modal).modal({
      show: true
    })

    this.setState({
      ...this.state,
      subType: this.props.subType
    })
  }

  onFieldChanged(name, e) {
    this.setState({
      ...this.state,
      subType: this.state.subType.set(name, e.target.value)
    })
  }

  onNumericFieldChanged(name, e) {
    var value = e.target.value;

    if (value == undefined || value == null || value == '') {
      value = 0
    }

    this.setState({
      ...this.state,
      subType: this.state.subType.set(name, value)
    })
  }

  onConfirm(e) {
    e.preventDefault();

    $(this.refs.Modal).on('hidden.bs.modal', (e) => {
      return this.promise.resolve();
    })

    const timeTst = this.state.subType.get('timeTst')
    const timeDsp = this.state.subType.get('timeDsp')
    const timeTstPrev = this.state.subType.get('timeTstPrev')
    const timeDspPrev = this.state.subType.get('timeDsp')

    const timeTstValid = !dataUtils.isEmpty(timeTst)
    const timeDspValid = !dataUtils.isEmpty(timeDsp)
    const timeTstPrevValid = !dataUtils.isEmpty(timeTstPrev)
    const timeDspPrevValid = !dataUtils.isEmpty(timeDspPrev)

    const hasError = !timeTstValid
      || !timeDspValid || !timeTstPrevValid || !timeDspPrevValid

    this.setState({
      ...this.state,
      isProcessing: !hasError,
      timeTstValid: timeTstValid,
      timeDspValid: timeDspValid,
      timeTstPrevValid: timeTstPrevValid,
      timeDspPrevValid: timeDspPrevValid
    })

    if (hasError){
      return;
    }

    this.props.onSuccess(this.state.subType, () => {
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

    const timeTstInputDivClass = classnames('col-xs-8', {
      'has-error': !this.state.timeTstValid
    })

    const timeDspInputDivClass = classnames('col-xs-8', {
      'has-error': !this.state.timeDspValid
    })

    const timeTstPrevInputDivClass = classnames('col-xs-8', {
      'has-error': !this.state.timeTstPrevValid
    })

    const timeDspPrevInputDivClass = classnames('col-xs-8', {
      'has-error': !this.state.timeDspPrevValid
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
                    <label className='col-xs-4 form-label'>TimeTST</label>
                    <div className={timeTstInputDivClass}>
                      <input type='number' step='any' className='form-control' value={this.state.subType.get('timeTst')}
                        onChange={_.partial(this.onNumericFieldChanged, 'timeTst')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>TimeDSP</label>
                    <div className={timeDspInputDivClass}>
                      <input type='number' step='any' className='form-control' value={this.state.subType.get('timeDsp')}
                        onChange={_.partial(this.onNumericFieldChanged, 'timeDsp')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>TimeTSTprev</label>
                    <div className={timeTstPrevInputDivClass}>
                      <input type='number' step='any' className='form-control' value={this.state.subType.get('timeTstPrev')}
                        onChange={_.partial(this.onNumericFieldChanged, 'timeTstPrev')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                <div className='col-xs-12'>
                  <label className='col-xs-4 form-label'>TimeDSPprev</label>
                  <div className={timeDspPrevInputDivClass}>
                    <input type='number' step='any' className='form-control' value={this.state.subType.get('timeDspPrev')}
                      onChange={_.partial(this.onNumericFieldChanged, 'timeDspPrev')} />
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
  subType: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired
}
