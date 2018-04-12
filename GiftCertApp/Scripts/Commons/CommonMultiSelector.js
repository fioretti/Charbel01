import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

export default class CommonMultiSelector extends Component {
  componentDidMount() {

    this.onSelectImpl = this.onSelectImpl.bind(this)

    var el = $(ReactDOM.findDOMNode(this));
    el.selectpicker({
      countSelectedText: '{0} selected'
    });
    el.on('changed.bs.select', this.onSelectImpl);
  }

  onSelectImpl(e) {
    const values = $(e.target).val();

    let selected = []

    values.forEach((id) => {
      const item = this.props.list.find((i) => {
        return i.id === parseInt(id);
      })

      selected.push(item)
    })

    this.props.onSelect(selected);
  }

  render() {
    let params = {}

    if(this.props.defaultValue) {
      params.defaultValue = this.props.defaultValue.map((item) => {
        return item.id;
      })
    }

    if (this.props.multiple) {
      params.multiple = 'multiple'
    }

    let textFormat = '';

    if(this.props.textFormat) {
      textFormat = this.props.textFormat
    } else {
      textFormat = 'count > 2'
    }

    return (
      <select style={this.props.style} {...params} data-width={this.props.style.width}
        data-selected-text-format={textFormat}>
      {
        this.props.list.map((item) => {
          return (<option key={item.id} value={item.id}>{item.name}</option>);
        })
      }
      </select>
    );
  }
}

CommonMultiSelector.propTypes = {
  defaultValue: PropTypes.array,
  style: PropTypes.object,
  multiple: PropTypes.string,
  onSelect: PropTypes.func,
  list: PropTypes.array
};
