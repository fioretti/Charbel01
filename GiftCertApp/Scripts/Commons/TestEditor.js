import React, { PropTypes } from 'react'
import BootstrapModal from 'react-bootstrap-modal'
import { fromJS } from 'Immutable'
import * as dataUtils from 'Utils/DataUtils'
import classnames from 'classnames'

import CommonMultiSelector from 'Commons/CommonMultiSelector'
import TimePicker from 'Commons/TimePicker'

export default class Modal extends React.Component {

  constructor() {
    super()

    this.onConfirm = this.onConfirm.bind(this)
    this.onAbort = this.onAbort.bind(this)
    this.onFieldChanged = this.onFieldChanged.bind(this)

    this.onDeviceTypeSelect = this.onDeviceTypeSelect.bind(this)
    this.onConditionSelect = this.onConditionSelect.bind(this)

    this.onSetupTimeChanged = this.onSetupTimeChanged.bind(this)
    this.onTemperatureChangeTimeChanged = this.onTemperatureChangeTimeChanged.bind(this)
    this.onTestConditionChangeTimeChanged = this.onTestConditionChangeTimeChanged.bind(this)

    this.onTestGroupChanged = this.onTestGroupChanged.bind(this)
    this.onTargetLabChanged = this.onTargetLabChanged.bind(this)

    this.onActiveChanged = this.onActiveChanged.bind(this)

    this.state = {
      isProcessing: false,
      test: fromJS({
        conditions: [],
        deviceTypes: []
      }),
      isNameEmpty: false,
      isTestGroupEmpty: false,
      isTargetLabEmpty: false,
      isConditionEmpty: false,
      isExpUnitPerHourEmpty: false,
      isPrevUnitPerHourEmpty: false,
      isDeviceTypeEmpty: false
    }
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      test: this.props.test
    })
  }

  componentDidMount() {
    this.promise = new $.Deferred();
    $(this.refs.Modal).modal({
      show: true
    })
  }

  onSetupTimeChanged(value) {
    this.setState({
      ...this.state,
      test: this.state.test.set('testSetupTime', value)
    })
  }

  onTemperatureChangeTimeChanged(value) {
    this.setState({
      ...this.state,
      test: this.state.test.set('temperatureChangeTime', value)
    })
  }

  onTestConditionChangeTimeChanged(value) {
    this.setState({
      ...this.state,
      test: this.state.test.set('testConditionChangeTime', value)
    })
  }

  onConditionSelect(selected) {
    this.setState({
      ...this.state,
      test: this.state.test.set('conditions', fromJS(selected))
    })
  }

  onDeviceTypeSelect(selected) {
    this.setState({
      ...this.state,
      test: this.state.test.set('deviceTypes', fromJS(selected))
    })
  }

  onTestGroupChanged(e) {
    const value = $(e.target).val();

    const testGroup = this.props.testGroupsData.find((i) => {
      return i.get('id') === parseInt(value);
    })

    this.setState({
      ...this.state,
      test: this.state.test.set('testGroup', fromJS(testGroup))
    })
  }

  onTargetLabChanged(e) {
    const value = $(e.target).val();

    const targetLab = this.props.targetLabsData.find((i) => {
      return i.get('id') === parseInt(value);
    })

    this.setState({
      ...this.state,
      test: this.state.test.set('targetLab', fromJS(targetLab))
    })
  }

  onFieldChanged(name, e) {
    this.setState({
      ...this.state,
      test: this.state.test.set(name, e.target.value)
    })
  }

  onActiveChanged(e) {
    const item = this.state.item;
    const checked = $(e.target).is(':checked');

    this.setState({
      ...this.state,
      test: this.state.test.set('isDeleted', !checked)
    })
  }

  onConfirm(e) {
    e.preventDefault();
    $(this.refs.Modal).on('hidden.bs.modal', (e) => {
      return this.promise.resolve();
    })

    const isNameEmpty = dataUtils.isEmpty(this.state.test.get('name'))

    const testExpectedUnitPerHour = this.state.test.get('testExpectedUnitPerHour')
    const isExpUnitPerHourEmpty = dataUtils.isEmpty(testExpectedUnitPerHour)
      || parseInt(testExpectedUnitPerHour) <= 0

    const isDeviceTypeEmpty = this.state.test.get('deviceTypes').count() == 0

    const isTestGroupEmpty = this.state.test.get('testGroup').get('id') == 0
    const isTargetLabEmpty = this.state.test.get('targetLab').get('id') == 0

    const hasError = isNameEmpty || isTargetLabEmpty || isTestGroupEmpty
      || isExpUnitPerHourEmpty || isDeviceTypeEmpty;

    this.setState({
      ...this.state,
      isProcessing: !hasError,
      isNameEmpty: isNameEmpty,
      isTestGroupEmpty: isTestGroupEmpty,
      isTargetLabEmpty: isTargetLabEmpty,
      isExpUnitPerHourEmpty: isExpUnitPerHourEmpty,
      isDeviceTypeEmpty: isDeviceTypeEmpty
    })

    if (hasError){
      return;
    }

    this.props.onSuccess(this.state.test, () => {
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

    const targetLabInputDivClass = classnames('col-xs-8', {
      'has-error': this.state.isTargetLabEmpty
    })

    const testGroupInputDivClass = classnames('col-xs-8', {
      'has-error': this.state.isTestGroupEmpty
    })

    const expUnitPerHourDivClass = classnames('col-xs-8', {
      'has-error': this.state.isExpUnitPerHourEmpty
    })

    const deviceTypesDivClass = classnames('col-xs-8', {
      'has-error': this.state.isDeviceTypeEmpty
    })

    const style = {
      commonMultiSelector: {
        width: '100%'
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
              <form className='form-horizontal'>
                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Name</label>
                  <div className={nameInputDivClass}>
                    <input type='text' className='form-control'
                      onChange={_.partial(this.onFieldChanged, 'name')}
                      value={this.state.test.get('name')} />
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Test Group</label>
                  <div className={testGroupInputDivClass}>
                    <select className='form-control' value={this.state.test.get('testGroup').get('id')}
                      onChange={this.onTestGroupChanged}>
                      <option key='0' value='0'>Please select a Test Group</option>
                      {
                        this.props.testGroupsData.map((item, idx) => {
                          return (<option key={idx} value={item.get('id')}>{item.get('name')}</option>)
                        })
                      }
                    </select>
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Target Lab</label>
                  <div className={targetLabInputDivClass}>
                    <select className='form-control' value={this.state.test.get('targetLab').get('id')}
                      onChange={this.onTargetLabChanged}>
                      <option key='0' value='0'>Please select a Target Lab</option>
                      {
                        this.props.targetLabsData.map((item, idx) => {
                          return (<option key={idx} value={item.get('id')}>{item.get('name')}</option>)
                        })
                      }
                    </select>
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Conditions</label>
                  <div className='col-xs-8'>
                    <CommonMultiSelector style={style.commonMultiSelector}
                      defaultValue={this.state.test.get('conditions').toJS()}
                      list={this.props.conditionsData.toJS()}
                      multiple='multiple'
                      onSelect={this.onConditionSelect}/>
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Setup Time</label>
                  <div className='col-xs-8'>
                    <TimePicker defaultValue={this.state.test.get('testSetupTime')} onChange={this.onSetupTimeChanged}/>
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Cond. Change Time</label>
                  <div className='col-xs-8'>
                    <TimePicker defaultValue={this.state.test.get('testConditionChangeTime')} onChange={this.onTestConditionChangeTimeChanged}/>
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Temp. Change Time</label>
                  <div className='col-xs-8'>
                    <TimePicker defaultValue={this.state.test.get('temperatureChangeTime')} onChange={this.onTemperatureChangeTimeChanged}/>
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Exp. Units/Hour</label>
                  <div className={expUnitPerHourDivClass}>
                    <input type='number' className='form-control'
                      onChange={_.partial(this.onFieldChanged, 'testExpectedUnitPerHour')}
                      value={this.state.test.get('testExpectedUnitPerHour')} />
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Prev. Units/Hour</label>
                  <div className='col-xs-8'>
                    <input type='number' className='form-control'
                      onChange={_.partial(this.onFieldChanged, 'testPreviousUnitPerHour')}
                      value={this.state.test.get('testPreviousUnitPerHour')} />
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Device Types</label>
                  <div className={deviceTypesDivClass}>
                    <CommonMultiSelector style={style.commonMultiSelector}
                      defaultValue={this.state.test.get('deviceTypes').toJS()}
                      list={this.props.deviceTypesData.toJS()}
                      multiple='multiple'
                      onSelect={this.onDeviceTypeSelect}/>
                  </div>
                </div>

                <div className='form-group'>
                  <label className='col-xs-4 control-label'>Active</label>
                  <div className='col-xs-8'>
                    <div className='checkbox'>
                      <label>
                        <input type='checkbox'
                          onChange={this.onActiveChanged}
                          checked={!this.state.test.get('isDeleted')} />
                      </label>
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
  test: PropTypes.object.isRequired,
  testGroupsData: PropTypes.object.isRequired,
  targetLabsData: PropTypes.object.isRequired,
  conditionsData: PropTypes.object.isRequired,
  deviceTypesData: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired
}
