import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

import { statusList } from 'Utils/RequestStatusEnum'

export default class RequestStatusSelector extends Component {
  componentDidMount() {

    var el = $(ReactDOM.findDOMNode(this));
    el.selectpicker({
      countSelectedText: '{0} options selected'
    });
    el.on('changed.bs.select', this.props.onSelect);
  }

  render() {
    let params = {}

    if(this.props.defaultValue) {
      params.defaultValue = this.props.defaultValue.map((item) => {
        return item;
      })
    } else {
      params.defaultValue = statusList.filter((item) => item.name !== 'Closed').map((item) => {
        return item.id;
      })
    }

    if (this.props.multiple) {
      params.multiple = 'multiple'
    }

    return (
      <select style={this.props.style} {...params} data-width={this.props.style.width}
        data-selected-text-format="count > 3">
      {
        statusList
          .filter((item) => {
            if (this.props.exclude) {
              return !this.props.exclude.contains(item.name)
            }

            return true;
          })
          .map((item) => {
          return (<option key={item.id} value={item.id}>{item.name}</option>);
        })
      }
      </select>
    );
  }
}

RequestStatusSelector.propTypes = {
  defaultValue: PropTypes.array,
  style: PropTypes.object,
  multiple: PropTypes.string,
  onSelect: PropTypes.func,
  exclude: PropTypes.object
};
