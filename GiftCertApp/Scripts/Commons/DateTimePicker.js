import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

import { DATE_FORMAT, DATETIME_FORMAT } from 'Utils/DataUtils'

export default class DateTimePicker extends Component {
  constructor() {
    super()

    this.formatDate = this.formatDate.bind(this)
  }

  componentDidMount() {
    const dateInputOpts = {
      format: this.props.showTime ? DATETIME_FORMAT : DATE_FORMAT,
      showClear: this.props.notAllowClear ? false: true,
      showClose: true
    };

    $(this.refs.dateControl).datetimepicker(dateInputOpts)
      .on('dp.change', (e) => {

        let date = e.date;

        if (date === false) {
          date = undefined;
        }

        this.props.onChange(date)
      });
  }

  formatDate(date) {
    if (date)
    {
      return date.format(this.props.showTime ? DATETIME_FORMAT : DATE_FORMAT);
    }

    return '';
  }

  render() {
    let attrs = {}

    if(this.props.disabled) {
      attrs.disabled = 'disabled'
    }

    if (this.props.tabIndex) {
      attrs.tabIndex = this.props.tabIndex
    }

    return (
      <input type='text' className='form-control lmd-date-input' ref='dateControl'
        value={this.formatDate(this.props.value)} {...attrs} />
    )
  }
}

DateTimePicker.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
};
