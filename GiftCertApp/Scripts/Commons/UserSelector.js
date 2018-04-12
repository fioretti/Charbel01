import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';

export default class UserSelector extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }

    this.el = null;
  }

  componentWillUnmount() {
    if (!this.el) { return; }

    this.el.select2('destroy');
    this.el = null;
  }

  componentDidMount() {
    var el = $(ReactDOM.findDOMNode(this));
    this.el = el;
    el.select2({
      ajax: {
          url: 'user/findUser',
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
                id: d.Id,
                text: d.FullName
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

  componentWillMount() {
    let selections = []
    const defaultVal = this.props.defaultValue;

    if (defaultVal !== undefined) {
      if (defaultVal.constructor === Array){
        defaultVal.forEach((item) => {
          selections.push(item)
        })
      } else {
        selections.push(defaultVal)
      }
    }

    this.setState({
      ...this.state,
      list: selections
    })
  }

  render() {
    let params = {}

    if (this.props.multiple) {
      params.multiple = 'multiple'
    }

    if (this.props.tabIndex) {
        params.tabIndex = this.props.tabIndex
    }

    if(this.state.list.length > 0) {
      if (this.props.multiple) {
        params.defaultValue = this.state.list.map((item) => {
          return item.id;
        })
      } else {
        params.defaultValue = this.state.list[0].id
      }
    }

    let selections = []
    this.state.list.forEach((item) => {
      selections.push(<option key={item.id} value={item.id}>{item.fullName}</option>)
    })

    return (
      <select style={this.props.style} {...params}>
        {selections}
      </select>
    );
  }
}

UserSelector.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  style: PropTypes.object,
  multiple: PropTypes.string,
  onSelect: PropTypes.func,
  onUnselect: PropTypes.func,
};
