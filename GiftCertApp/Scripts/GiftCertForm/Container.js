import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import _ from 'lodash';

import { bindActionCreators, applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { fromJS } from 'Immutable'

const { string, number } = PropTypes

import ReduxToastr from 'react-redux-toastr'

import giftCertFormReducer from './Reducer';
import {reducer as toastrReducer} from 'react-redux-toastr'

import * as actions from './Actions'
import * as api from 'Utils/Api'
import * as dataUtils from 'Utils/DataUtils'
import { statusList } from 'Utils/GiftCertStatusEnum'

const giftCert = $('#giftCert').val();
const isUserAdmin = $('#isUserAdmin')

class GiftCertForm extends React.Component {
  constructor() {
    super();

    this.onFieldChanged = this.onFieldChanged.bind(this)  
    this.onSubmitClicked = this.onSubmitClicked.bind(this)      
    this.onActionDataChanged = this.onActionDataChanged.bind(this)
  }

  componentDidMount() {
      var self = this;
      debugger;
    self.props.setInitialDataAndHandle(JSON.parse(giftCert))
  }

  onSubmitClicked(e, isSavingDraft) {
    e.preventDefault();
    const data = this.props.testRequest;
    this.props.addTestRequest(data, isSavingDraft);
  }

  onActionDataChanged(name, date) {
    this.props.actionDataChanged({
      [name]: date
    })
  }

  onFieldChanged (name, e) {
    const value = e.target.value;
    this.props.headerDataChanged({
      [name]: fromJS(value)
    })
  }

  formatStatusForDisplay(data) {      
      debugger;
      return statusList.filter((item) => {
          return item.id == data
      })[0].name
  }

  render() {
    //if(this.props.giftCert.get('isLoading')) {
    //  return (<div />)
    //}

    const style = {
      container: {
        padding: '15px'
      },
      form: {
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '10px'
      },
      singleColumnRow : {
        marginRight: '15px'
      },
      userSelector: {
        width: '100%'
      },
      watchers : {
        width: '100%'
      },
      buttonActionRow: {
        marginRight: '30px'
      },    
      submitStyle: {
        width: '150px'
      },
      hiddenSubmitStyle: {
        display: 'none'
      },
      dualColumnDiv: {
        padding: '0'
      }
    };

    const giftCert = this.props.giftCert;

    //const gcTypeInputDiv = classnames('col-xs-8', {
    //    'has-error': headerData.get('gcTypeIsEmpty')
    //})

    //const creatorInputDiv = classnames('col-xs-8', {        
    //    'has-error': headerData.get('creatorIsEmpty')
    //})

    const submitButtonClasses = classnames('btn', 'btn-primary', {
      'disabled': giftCert.get('isSubmitting')
    });

    const submitLoadingIndicator = classnames('fa', {
        'fa-spinner fa-spin': giftCert.get('isSavingDraft') === false && giftCert.get('isSubmitting')
    });

    const headerData = giftCert.get('headerData');
 
    const headerElem = (
      <form ref='form' className='form-horizontal' method='POST' style={style.form}>

      <div className='row'>
        <div className='form-group col-xs-6'>
          <label className='col-xs-4 control-label'>Certificate No</label>
          <div className='col-xs-8'>
              <input type='text' className='form-control' value={headerData.get('giftCertNo')}
                  tabIndex='2' onChange={_.partial(this.onFieldChanged, 'giftCertNo')} />
          </div>
        </div>
        <div className='form-group col-xs-6'>
            <label className='col-xs-4 control-label'>Status</label>
            <div className='col-xs-8'>
                <input type='text' className='form-control' value={this.formatStatusForDisplay(headerData.get('status'))}
                    readOnly />
            </div>
        </div>
      </div>
      <div className='row'>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>DTI Permit No</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('dtiPermitNo')}
                      tabIndex='2' onChange={_.partial(this.onFieldChanged, 'dtiPermitNo')} />
              </div>
          </div>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>Issuance Date</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('issuanceDate')}
                      readOnly />
              </div>
          </div>
      </div>
      <div className='row'>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>QR Code</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('qrCode')}
                      tabIndex='2' onChange={_.partial(this.onFieldChanged, 'qrCode')} />
              </div>
          </div>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>Expiration Date</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('giftCertNo')}
                       />
              </div>
          </div>
      </div>
      <div className='row'>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>GC Type</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('giftCertNo')}
                       />
              </div>
          </div>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>Creator</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('giftCertNo')}
                      tabIndex='2' onChange={_.partial(this.onFieldChanged, 'giftCertNo')} />
              </div>
          </div>
      </div>
      <div className='row'>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>Value</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('value')}
                      tabIndex='2' onChange={_.partial(this.onFieldChanged, 'value')} />
              </div>
          </div>
          <div className='form-group col-xs-6'>
              <label className='col-xs-4 control-label'>Date Modified</label>
              <div className='col-xs-8'>
                  <input type='text' className='form-control' value={headerData.get('giftCertNo')}
                      readOnly />
              </div>
          </div>
      </div>
      <div className='row' style={style.singleColumnRow}>
          <div className='form-group col-xs-12'>
              <label className='col-xs-2 control-label'>Note</label>
              <div className='col-xs-10'>
                  <textarea className='form-control'
                      tabIndex='17' value={headerData.get('note')} onChange={_.partial(this.onFieldChanged, 'note')}></textarea>
              </div>
          </div>
      </div>
        
      </form>
    );

    //const isUserAdmin = testRequest.get('isUserAdmin');

    return (
      <div style={style.container}>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h4>Header Data</h4>
          </div>
          <div className='panel-body'>
            {headerElem}
          </div>
        </div>
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h4>Services</h4>
            </div>
            <div className='panel-body'>...</div>
        </div>
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h4>Outlets</h4>
            </div>
            <div className='panel-body'>...</div>
        </div>
        <div className='row' style={style.buttonActionRow}>
          <div className='form-group col-xs-12'>          
            <button type='submit' className={submitButtonClasses} style={style.submitStyle}
              onClick={(e) => this.onSubmitClicked(e, false) }
              name='submit' value='submit'><i className={submitLoadingIndicator} /> Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({giftCert}) {
  return {
      giftCert: giftCert
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const GiftCertFormContainer = connect(mapStateToProps, mapDispatchToProps)(GiftCertForm)

const rootReducers = combineReducers({
  giftCert: giftCertFormReducer,  
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
      <GiftCertFormContainer  />
      <ReduxToastr />
    </div>
  </Provider>,
  document.getElementById('content')
);
