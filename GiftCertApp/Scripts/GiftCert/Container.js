import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import moment from 'moment'

import { bindActionCreators, applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { Map, List, fromJS } from 'Immutable'

import ReduxToastr, { reducer as toastrReducer } from 'react-redux-toastr'

import * as api from 'Utils/Api'
import RequestStatusSelector, { statusList } from 'Commons/RequestStatusSelector'

import * as actions from './Actions'
import myRequestReducer from './Reducer'

import Request from './Components/Request'

class MyRequest extends React.Component {
  constructor() {
    super()

    this.onSearchClicked = this.onSearchClicked.bind(this)
    this.onStatusChanged = this.onStatusChanged.bind(this)
    this.onToggleDetail = this.onToggleDetail.bind(this)
  }

  componentDidMount() {
    const dateInputOpts = {
      locale: {
        format: 'DD/MM/YYYY',
        cancelLabel: 'Clear'
      },
      alwaysShowCalendars: true,
      ranges: {
       'Today': [moment(), moment()],
       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
       'This Month': [moment().startOf('month'), moment().endOf('month')],
       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    };

    $(this.refs.dateRange).daterangepicker(dateInputOpts)
      .val('')
      .on('cancel.daterangepicker', (ev, picker) => {
        $(this.refs.dateRange).val('')
        this.props.setDateRange({
          startDate: {},
          endDate: {}
        });
      })
      .on('apply.daterangepicker', (ev, picker) => {
        this.props.setDateRange({
          startDate: picker.startDate,
          endDate: picker.endDate
        });
      })

      const requests = $('#requests').val();
      this.props.populateRequests(fromJS(JSON.parse(requests)));

      const isUserAdmin = $('#isUserAdmin');
      if(isUserAdmin.length > 0) {
        this.props.setUserAdmin()
      }

      const canCreateRequest = $('#canCreateRequest')
      if(canCreateRequest.length > 0) {
        this.props.setAllowCreateRequest()
      }

      const canModifyRequest = $('#canModifyRequest')
      if(canModifyRequest.length > 0) {
        this.props.setAllowModifyRequest()
      }

      const canDeleteRequest = $('#canDeleteRequest')
      if(canDeleteRequest.length > 0) {
        this.props.setAllowDeleteRequest()
      }

  }

  onToggleDetail(e) {
    this.props.toggleDetail()
  }

  onStatusChanged(e) {
    const value = $(e.target).val();

    const data = this.props.myRequest;
    this.props.setStatus(value);
  }

  onSearchClicked(e) {
    e.preventDefault();

    const data = this.props.myRequest;

    const postData = {
      status: data.get('status').toJS(),
      requestedDateFrom: data.get('startDate').toJSON(),
      requestedDateTo: data.get('endDate').toJSON()
    };

    this.props.fetchRequestsAndHandle(postData);
  }

  render() {
    const style = {
      container: {
        padding: '15px'
      },
      status: {
        width: '100%'
      }
    }

    const toggleDetail = this.props.myRequest.get('toggleDetail')

    return (
      <div style={style.container}>
        <h4>Filter <small>(Please select a status and date range of test request)</small></h4>
        <form className='form-horizontal'>
          <div className='form-group'>
            <label className='col-xs-4 control-label'>Status</label>
            <div className='col-xs-8'>
              <RequestStatusSelector multiple='multiple' style={style.status}
               onSelect={this.onStatusChanged} />
            </div>
          </div>
          <div className='form-group'>
            <label className='col-xs-4 control-label'>Date Range</label>
            <div className='col-xs-8'>
              <input ref='dateRange' className='form-control' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-4 col-xs-8'>
              <button className='btn btn-primary' onClick={this.onSearchClicked}>
                {
                  (
                    () => {
                      if (this.props.myRequest.get('isSearching')) {
                        return (<i className='fa fa-spin fa-spinner' />)
                      } else {
                        return (<i className='fa fa-search' />)
                      }
                    }
                  )()
                } Search</button>
            </div>
          </div>
        </form>

        <div className='pull-right'>
          <div className='checkbox'>
            <label>
              <input type='checkbox' value={this.props.myRequest.get('toggleDetail')} onChange={this.onToggleDetail} /> Show Detail
            </label>
          </div>
        </div>

        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Project Number</th>
              <th>Part Number</th>
              <th>Request Type</th>
              {
                (() => {
                  if(toggleDetail) {
                    return (<th>Division</th>)
                  }
                })()
              }
              {
                (() => {
                  if(toggleDetail) {
                    return (<th>Business Line</th>)
                  }
                })()
              }
              <th>Priority</th>
              <th>Request Date</th>
              <th>Age Request</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.myRequest.get('result').map((item, idx) => {
                return (
                  <Request request={item} key={idx}
                    toggleDetail={toggleDetail}
                    isUserAdmin={this.props.myRequest.get('isUserAdmin')}
                    allowCreate={this.props.myRequest.get('allowCreate')}
                    allowModify={this.props.myRequest.get('allowModify')}
                    allowDelete={this.props.myRequest.get('allowDelete')} />
                )
              })
            }
          </tbody>
        </table>

      </div>
    )
  }
}

function mapStateToProps({myRequest}) {
  return {
    myRequest: myRequest
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const MyRequestContainer = connect(mapStateToProps, mapDispatchToProps)(MyRequest)

const rootReducers = combineReducers({
  myRequest: myRequestReducer,
  toastr: toastrReducer
});

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MyRequestContainer  />
      <ReduxToastr />
    </div>
  </Provider>,
  document.getElementById('content')
);
