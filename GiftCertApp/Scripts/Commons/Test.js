import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'Immutable'

import classnames from 'classnames'

import GeneralCondition from './GeneralCondition'
import StepCondition from './StepCondition'

import * as testRequestFormAction from 'TestRequestForm/Actions'
import { statusList } from 'Utils/TestStatusEnum'
import * as dataUtils from 'Utils/DataUtils'

const { object, func } = PropTypes

export class Test extends React.Component {

  constructor() {
    super();
    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.onCopyClicked = this.onCopyClicked.bind(this);
    this.onRemoveClicked = this.onRemoveClicked.bind(this);
  }

  onCopyClicked(e) {
    e.preventDefault();
    this.props.dispatch(testRequestFormAction.copyTest(this.props.test))
  }

  onRemoveClicked(e) {
    e.preventDefault();
    this.props.dispatch(testRequestFormAction.removeTest(this.props.test))
  }

  onFieldChanged(name, e) {
    const value = e.target.value;
    const changes = {
  	   [name]: fromJS(value)
    }

    const testSelection = this.props.test.get('testSelection');
    const data = {
      test: this.props.test,
      testSelection: testSelection,
      changes: changes
    }

    this.props.onTestChanged(data)
  }

  onConditionChanged(test, conditionSelection, changes) {
    const data = {
      condition: conditionSelection.get('condition'),
      test: this.props.test,
      changes:changes
    }

    this.props.onConditionChanged(data);
  }

  render() {
    const testSelection = this.props.test.get('testSelection');

    if(testSelection == undefined) {
      return (<i />)
    }

    const temperatureInputDiv = classnames('col-xs-9', {
      'has-error': this.props.test.get('temperatureIsEmpty')
    })

    const numOfDeviceInputDiv = classnames('col-xs-9', {
      'has-error': this.props.test.get('numOfDevicesIsEmpty')
    })

    const numTemperaturesInputDiv = classnames('col-xs-9', {
      'has-error': this.props.test.get('temperatureIsNotValid')
    })

    const style = {
      title: {
        fontSize: '24px'
      },
      action: {
        cursor: 'pointer',
        marginRight: '30px'
      }
    }

    let attrs = {}

    if (this.props.readOnly) {
      attrs.readOnly = 'readOnly'
    }

    let actions = (<i/>)

    if(this.props.showActions) {
      actions = (
        <div className='pull-right' style={style.action}>
          <span className='lmd-test-action' title='Copy Test' onClick={this.onCopyClicked}> <i className='glyphicon glyphicon-duplicate' /> </span>
          <span className='lmd-test-action' title='Delete Test' onClick={this.onRemoveClicked}> <i className='glyphicon glyphicon-trash' /> </span>
        </div>
      )
    }

    let conditionsElem = [];
    this.props.test.get('conditionSelections').map((conditionSelection, idx) => {
      const condition = conditionSelection.get('condition');
      if (condition.get('stepApplicable')) {
        conditionsElem.push(<StepCondition key={idx} test={this.props.test}
          conditionSelection={conditionSelection} {...attrs}
          onConditionChanged={(changes) => this.onConditionChanged(this.props.test, conditionSelection, changes)}/>);
      } else {
        conditionsElem.push(<GeneralCondition key={idx} test={this.props.test}
          conditionSelection={conditionSelection} {...attrs}
          onConditionChanged={(changes) => this.onConditionChanged(this.props.test, conditionSelection, changes)}/>);
      }
    })

    let detail = (<i/>)

    if (this.props.showDetail) {
      let startDate = '-'
      let endDate = '-'
      let reviewDate = '-'
      let rejectDate = '-'

      let startBy = '-'
      let endBy = '-'
      let reviewBy = '-'
      let rejectBy = '-'

      if(this.props.test.get('startDate')) {
        startDate = dataUtils.renderToLocalDateTime(this.props.test.get('startDate'))
      }

      if (this.props.test.get('startBy'))  {
        startBy = this.props.test.get('startBy').get('fullName')
      }

      if (this.props.test.get('stopDate'))  {
        endDate = dataUtils.renderToLocalDateTime(this.props.test.get('stopDate'))
      }

      if (this.props.test.get('stopBy'))  {
        endBy = this.props.test.get('stopBy').get('fullName')
      }

      if (this.props.test.get('reviewedDate')) {
        reviewDate = dataUtils.renderToLocalDateTime(this.props.test.get('reviewedDate'))
      }

      if (this.props.test.get('reviewedBy'))  {
        reviewBy = this.props.test.get('reviewedBy').get('fullName')
      }

      if (this.props.test.get('rejectedDate')) {
        rejectDate = dataUtils.renderToLocalDateTime(this.props.test.get('rejectedDate'))
      }

      if (this.props.test.get('rejectedBy'))  {
        rejectBy = this.props.test.get('rejectedBy').get('fullName')
      }

      let technician = ''

      if (this.props.test.get('technician')) {
        technician = this.props.test.get('technician').get('fullName')
      }

      let status = ''

      if (this.props.test.get('status')) {
        status = statusList.filter((item) => {
          return item.id == this.props.test.get('status')
        })[0].name
      }

      const style = {
        dualColumnDiv: {
          padding: 0
        }
      }

      detail = (
        <div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Test Priority</label>
              <div className='col-xs-9'>
                <input type='text' className='form-control' defaultValue={this.props.test.get('priority')} readOnly/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Test Status</label>
              <div className='col-xs-9'>
                <input type='text' className='form-control' defaultValue={status} readOnly/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Technician</label>
              <div className='col-xs-9'>
                <input type='text' className='form-control' defaultValue={technician} readOnly/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Start</label>
              <div className='col-xs-9' style={style.dualColumnDiv}>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={startDate} readOnly/></div>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={startBy} readOnly/></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Stop</label>
              <div className='col-xs-9' style={style.dualColumnDiv}>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={endDate} readOnly/></div>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={endBy} readOnly/></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>WiP Station</label>
              <div className='col-xs-9'>
                <input type='text' className='form-control' defaultValue={this.props.test.get('wipStation')} readOnly/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Tech Notes</label>
              <div className='col-xs-9'>
                <textArea className='form-control' defaultValue={this.props.test.get('techNotes')} readOnly/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Reviewed</label>
              <div className='col-xs-9' style={style.dualColumnDiv}>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={reviewDate} readOnly/></div>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={reviewBy} readOnly/></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Reject</label>
              <div className='col-xs-9' style={style.dualColumnDiv}>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={rejectDate} readOnly/></div>
                <div className='col-xs-6'><input type='text' className='form-control' defaultValue={rejectBy} readOnly/></div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div>
          <span style={style.title}>{testSelection.get('name')}</span>
          {actions}
        </div>
        <form className='form-horizontal'>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'># of Temperatures</label>
              <div className={numTemperaturesInputDiv}>
                <input type='number' className='form-control' value={this.props.test.get('numTemperatures')}
                  onChange={_.partial(this.onFieldChanged, 'numTemperatures')} {...attrs}/>
                </div>
              </div>
            </div>
            <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Temperature</label>
              <div className={temperatureInputDiv}>
                <input type='text' className='form-control' value={this.props.test.get('temperature')}
                  onChange={_.partial(this.onFieldChanged, 'temperature')} {...attrs}/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Number of Devices to test per lot</label>
              <div className={numOfDeviceInputDiv}>
                <input type='number' className='form-control' value={this.props.test.get('numOfDevices')}
                  onChange={_.partial(this.onFieldChanged, 'numOfDevices')} {...attrs}/>
              </div>
            </div>
          </div>
          {conditionsElem}
          <div className='row'>
            <div className='form-group col-xs-12'>
              <label className='col-xs-3'>Comments</label>
              <div className='col-xs-9'>
                <textarea rows='3' type='text' className='form-control' value={this.props.test.get('comments')}
                  onChange={_.partial(this.onFieldChanged, 'comments')} {...attrs}/>
              </div>
            </div>
          </div>
          {detail}
        </form>
      </div>
    )
  }
}

Test.propTypes = {
  test: object.isRequired,
  onTestChanged: func.isRequired,
  onConditionChanged: func.isRequired,
  dispatch: func
}

export default Test
