import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

export default class RoleSelector extends Component {
  componentDidMount() {
    var el = $(ReactDOM.findDOMNode(this));
    el.select2({
      ajax: {
          url: 'role/findRole',
          type:'post',
          dataType: 'json',
          delay: 250,
          data: function (params) {
           return {
             q: params.term
           };
        },
        processResults: (data, params) => {
          return {
            results:data.map((d) => {
              return {
                id: d.id,
                text: d.name
              }
            }),
            id: 'id',
            text: 'text',
            pagination: {
              more: false
            }
          };

        },
        cache: true
      },
      escapeMarkup: (markup) => { return markup; }, // let our custom formatter work
      minimumInputLength: 1,
      templateResult: (user) => {
        if (user.loading) return name.text;
        var markup = "<div class='select2-result clearfix' id="+ user.id +">" + user.text + "</div>";
        return markup;
      }
    });

    el.on('select2:select', this.props.onSelect);
    el.on('select2:unselect', this.props.onUnselect);
  }

  render() {
    let params = {
      defaultValue: this.props.defaultValue.map((item) => {
        return item.id;
      })
    }

    if (this.props.multiple) {
      params.multiple = 'multiple'
    }

    return (
      <select style={this.props.style} {...params}>
      {
        this.props.defaultValue.map((item) => {
          return (<option key={item.id} value={item.id}>{item.name}</option>);
        })
      }
      </select>
    );
  }
}

RoleSelector.propTypes = {
  defaultValue: PropTypes.array,
  style: PropTypes.object,
  multiple: PropTypes.string,
  onSelect: PropTypes.func,
  onUnselect: PropTypes.func,
};
