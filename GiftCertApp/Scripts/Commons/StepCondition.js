import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'Immutable'
import classnames from 'classnames'

const { object, func } = PropTypes

export class StepCondition extends React.Component {
  constructor() {
    super();
    this.onFieldChanged = this.onFieldChanged.bind(this);
  }

  onFieldChanged(name, e) {
    const value = e.target.value;
    const changes = {
       [name]: fromJS(value)
    }

    this.props.onConditionChanged(changes)
  }

  render() {
    const style = {
      stepSection: {
        paddingLeft: '5px',
        paddingRight: '45px'
      },
      stepLabel: {
        fontWeight: 'bold',
        paddingLeft: '5px',
        paddingRight:'5px'
      }
    }

    let attrs = {}

    if (this.props.readOnly) {
      attrs.readOnly = 'readOnly'
    }

    const conditionSelection = this.props.conditionSelection;
    const condition = conditionSelection.get('condition');

    const valueInputDiv = classnames('col-xs-9', {
      'has-error': conditionSelection.get('valueIsEmpty')
    })

    return (
      <div className='row'>
        <div className='form-group col-xs-12'>
          <label className='col-xs-3'>{condition.get('label')}</label>
          <div className={valueInputDiv}>
            <input type='text' className='form-control' value={conditionSelection.get('value')}
              onChange={_.partial(this.onFieldChanged, 'value')} {...attrs}/>
          </div>
        </div>
        <div className='col-sm-offset-3 col-xs-9' style={style.stepSection}>
          <table width='100%' style={style.stepSection}>
            <tr>
              <td style={style.stepLabel}>Step From</td>
              <td>
                <input type='text' className='form-control' value={conditionSelection.get('stepFrom')}
                  onChange={_.partial(this.onFieldChanged, 'stepFrom')} {...attrs}/>
              </td>
              <td style={style.stepLabel}>Step To</td>
              <td>
                <input type='text' className='form-control' value={conditionSelection.get('stepTo')}
                  onChange={_.partial(this.onFieldChanged, 'stepTo')} {...attrs}/>
              </td>
              <td style={style.stepLabel}>Stepping</td>
              <td>
                <input type='text' className='form-control' value={conditionSelection.get('stepping')}
                  onChange={_.partial(this.onFieldChanged, 'stepping')} {...attrs}/>
              </td>
            </tr>
          </table>
        </div>
        <div className='form-group col-xs-12'>
          <div className='col-sm-offset-3 col-xs-9'>
            <span className='help-block'>{condition.get('helpText')}</span>
          </div>
        </div>
      </div>
    )
  }
}

StepCondition.propTypes = {
  test: object.isRequired,
  conditionSelection: object.isRequired,
  onConditionChanged: func.isRequired
}

export default StepCondition
