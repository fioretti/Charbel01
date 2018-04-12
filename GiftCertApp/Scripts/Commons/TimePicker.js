import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

export default class TimePicker extends Component {
  componentDidMount() {
    $(this.refs.timePicker).clockpicker({
      autoclose: false,
      twelvehour: false,
      donetext: 'Done'
    });

    const input = $('input', this.refs.timePicker)

    input.css('background-color', 'white')
    input.change((e) => {
      const value = $(e.target).val();
      this.props.onChange(this.toMinutes(value))
    })

    if (this.props.defaultValue != undefined) {
      input.val(this.toText(this.props.defaultValue))
    }
  }

  toMinutes (hh) {
    hh = hh.split(':');
    return (parseInt(hh[0], 10) * 60) + parseInt(hh[1], 10);
  }

  toText (m) {
    var minutes = m % 60;
    var hours = Math.floor(m / 60);

    minutes = (minutes < 10 ? '0' : '') + minutes;
    hours = (hours < 10 ? '0' : '') + hours;

    return hours + ':' + minutes;
  }

  render() {
    return (
      <div ref='timePicker' className='input-group clockpicker'>
        <input className='form-control' type='text' readOnly />
        <span className='input-group-addon'>
          <span className='glyphicon glyphicon-time'></span>
        </span>
      </div>
    )
  }
}

TimePicker.props = {
  defaultValue: PropTypes.object, // in minutes
  onChange: PropTypes.func
}
