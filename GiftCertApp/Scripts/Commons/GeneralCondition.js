import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'Immutable'
import classnames from 'classnames'

const { object, func } = PropTypes

export class GeneralCondition extends React.Component {
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
    const conditionSelection = this.props.conditionSelection;
    const condition = conditionSelection.get('condition');

    const valueInputDiv = classnames('col-xs-9', {
      'has-error': conditionSelection.get('valueIsEmpty')
    })

    let attrs = {}

    if (this.props.readOnly) {
      attrs.readOnly = 'readOnly'
    }

    return (
      <div className='row'>
        <div className='form-group col-xs-12'>
          <label className='col-xs-3'>{condition.get('label')}</label>
          <div className={valueInputDiv}>
            <input type='text' className='form-control' value={conditionSelection.get('value')}
              onChange={_.partial(this.onFieldChanged, 'value')} {...attrs}/>
            <span className='help-block'>{condition.get('helpText')}</span>
          </div>
        </div>
      </div>
    )
  }
}

GeneralCondition.propTypes = {
  test: object.isRequired,
  conditionSelection: object.isRequired,
  onConditionChanged: func.isRequired
}

export default GeneralCondition
