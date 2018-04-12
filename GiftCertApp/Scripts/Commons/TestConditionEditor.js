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
    this.onFieldChanged = this.onFieldChanged.bind(this)
    this.onStepApplicableChanged = this.onStepApplicableChanged.bind(this)
    this.onActiveChanged = this.onActiveChanged.bind(this)

    this.state = {
      isProcessing: false,
      condition: fromJS({}),
      isNameEmpty: false,
      isLabelEmpty: false,
      isHelpTextEmpty: false
    }
  }

  componentDidMount() {
    this.promise = new $.Deferred();
    $(this.refs.Modal).modal({
      show: true
    })

    this.setState({
      ...this.state,
      condition: this.props.condition
    })
  }

  onFieldChanged(name, e) {
    this.setState({
      ...this.state,
      condition: this.state.condition.set(name, e.target.value)
    })
  }

  onStepApplicableChanged(e) {
    const checked = $(e.target).is(":checked");

    this.setState({
      ...this.state,
      condition: this.state.condition.set('stepApplicable', checked)
    })
  }

  onActiveChanged(e) {
    const item = this.state.item;
    const checked = $(e.target).is(':checked');

    this.setState({
      ...this.state,
      condition: this.state.condition.set('isDeleted', !checked)
    })
  }

  onConfirm(e) {
    e.preventDefault();
    $(this.refs.Modal).on('hidden.bs.modal', (e) => {
      return this.promise.resolve();
    })

    const isNameEmpty = dataUtils.isEmpty(this.state.condition.get('name'))
    const isLabelEmpty = dataUtils.isEmpty(this.state.condition.get('label'))
    const isHelpTextEmpty = dataUtils.isEmpty(this.state.condition.get('helpText'))
    const hasError = isNameEmpty || isLabelEmpty || isHelpTextEmpty

    this.setState({
      ...this.state,
      isProcessing: !hasError,
      isNameEmpty: isNameEmpty,
      isLabelEmpty: isLabelEmpty,
      isHelpTextEmpty: isHelpTextEmpty
    })

    if (hasError){
      return;
    }

    this.props.onSuccess(this.state.condition, () => {
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

    const nameInputDivClass = classnames('col-xs-8', {
      'has-error': this.state.isNameEmpty
    })

    const labelInputDivClass = classnames('col-xs-8', {
      'has-error': this.state.isLabelEmpty
    })

    const helpTextInputDivClass = classnames('col-xs-8', {
      'has-error': this.state.isHelpTextEmpty
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
                    <label className='col-xs-4 form-label'>Name</label>
                    <div className={nameInputDivClass}>
                      <input type='text' className='form-control' value={this.state.condition.get('name')}
                        onChange={_.partial(this.onFieldChanged, 'name')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>Label</label>
                    <div className={labelInputDivClass}>
                      <input type='text' className='form-control' value={this.state.condition.get('label')}
                        onChange={_.partial(this.onFieldChanged, 'label')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>Steps Appl.</label>
                    <div className='col-xs-8'>
                      <div className='checkbox'>
                        <label>
                          <input type='checkbox' checked={this.state.condition.get('stepApplicable')}
                            onChange={this.onStepApplicableChanged}/>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>Help Text</label>
                    <div className={helpTextInputDivClass}>
                      <input type='text' className='form-control' value={this.state.condition.get('helpText')}
                        onChange={_.partial(this.onFieldChanged, 'helpText')} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='col-xs-12'>
                    <label className='col-xs-4 form-label'>Active</label>
                    <div className='col-xs-8'>
                      <div className='checkbox'>
                        <label>
                          <input type='checkbox'
                            onChange={this.onActiveChanged}
                            checked={!this.state.condition.get('isDeleted')} />
                        </label>
                      </div>
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
