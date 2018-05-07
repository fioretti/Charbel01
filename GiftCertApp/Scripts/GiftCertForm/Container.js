import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import _ from 'lodash';

import { bindActionCreators, applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { fromJS } from 'Immutable'

const { string, number } = PropTypes

import UserSelector from 'Commons/UserSelector'
import GcServiceList from 'GcServices'
//import DeviceCharacteristics from 'DeviceCharacteristics'
//import TestSelections from 'TestSelections'
import DateTimePicker from 'Commons/DateTimePicker'
//import Tests from 'Tests'

import ReduxToastr from 'react-redux-toastr'

import giftCertFormReducer from './Reducer';
//import addDeviceModalReducer from 'AddDeviceModal/Reducer';
//import addLotModalReducer from 'AddLotModal/Reducer'
//import removeDeviceModalReducer from 'RemoveDeviceConfirmation/Reducer'
//import removeLotModalReducer from 'RemoveLotConfirmation/Reducer'
import { reducer as toastrReducer } from 'react-redux-toastr'

import * as actions from './Actions'
import * as api from 'Utils/Api'
import * as dataUtils from 'Utils/DataUtils'
import { statusList } from 'Utils/GiftCertStatusEnum'
import { debug } from 'util';

const request = $('#giftCert').val();
debugger;
//const deviceConfidentiality = $('#deviceConfidentiality').val();
const isUserAdmin = $('#isUserAdmin')

class GiftCertForm extends React.Component {
    constructor() {
        super();

        this.onFieldChanged = this.onFieldChanged.bind(this)
        this.onCommentsChanged = this.onCommentsChanged.bind(this)
        this.onSubmitClicked = this.onSubmitClicked.bind(this)
        this.onRequesterSelectAndUnselect = this.onRequesterSelectAndUnselect.bind(this)
        this.onWatcherSelectAndUnselect = this.onWatcherSelectAndUnselect.bind(this)
        this.onDivisionChanged = this.onDivisionChanged.bind(this)
        this.onBusinessLineChanged = this.onBusinessLineChanged.bind(this)
        this.onProductLineChanged = this.onProductLineChanged.bind(this)
        this.onTargetLabChanged = this.onTargetLabChanged.bind(this)
        this.onSegmentChanged = this.onSegmentChanged.bind(this)
        this.onRequestTypeChanged = this.onRequestTypeChanged.bind(this)
        this.onSubRequestTypeChanged = this.onSubRequestTypeChanged.bind(this)
        this.onGcTypeChanged = this.onGcTypeChanged.bind(this)
        this.onProjectManagerChanged = this.onProjectManagerChanged.bind(this)
        this.onProjectOwnerChanged = this.onProjectOwnerChanged.bind(this)
        this.onIssuanceDateChanged = this.onIssuanceDateChanged.bind(this)
        this.onExpirationDateChanged = this.onExpirationDateChanged.bind(this)

        this.onActionDataChanged = this.onActionDataChanged.bind(this)
    }

    componentDidMount() {
        var self = this;

        if (isUserAdmin.length > 0
            || $('#canModifyRequest').length > 0) {
            self.props.setAdminState()
        }
        debugger;
        let _request = JSON.parse(request);
        // _request.deviceConfidentiality = deviceConfidentiality.replace(/[\"]+/g, '');
        self.props.setInitialDataAndHandle(_request)

        api.getChannels((data) => {
            self.props.channelLoaded(data)
        })

        api.getDivisions((data) => {
            self.props.divisionsLoaded(data);
        });

        api.getTargetLabs((data) => {
            self.props.targetlabsLoaded(data);
        })

        api.getTestRequestTypes((data) => {
            self.props.requestTypeLoaded(data);
        });

        api.getGcType(data => {
            debugger;
            self.props.gcTypesLoaded(data.data);
        });

        api.getSubRequestType(data => {
            self.props.subRequestTypesLoaded(data)
        })
    }

    onCommentsChanged(name, e) {
        const value = e.target.value;
        this.props.commentsChanged({
            [name]: fromJS(value)
        })
    }

    onSubmitClicked(e, isSavingDraft) {
        e.preventDefault();
        const data = this.props.giftCert;

        this.props.addTestRequest(data, isSavingDraft);
    }

    onActionDataChanged(name, date) {
        this.props.actionDataChanged({
            [name]: date
        })
    }

    onIssuanceDateChanged(date) {
        this.props.headerDataChanged({
            issuanceDate: date
        })
    }

    onExpirationDateChanged(date) {
        this.props.headerDataChanged({
            expirationDate: date
        })
    }

    onFieldChanged(name, e) {
        const value = e.target.value;
        this.props.headerDataChanged({
            [name]: fromJS(value)
        })
    }

    refreshTestSelection(params) {
        var self = this;

        if (isNaN(params.targetLab)) {
            params.targetLab = 0;
        }

        if (isNaN(params.deviceType)) {
            params.deviceType = 0;
        }

        api.getTestSelection(params, (data) => {
            self.props.testSelectionLoaded(data)
        });
    }

    onTargetLabChanged(e) {
        const targetLab = parseInt($(e.target).val());

        this.props.headerDataChanged({
            targetLab: fromJS({
                id: targetLab,
                name: $('option:selected', e.target).text()
            })
        })

        this.refreshTestSelection({
            targetLab: targetLab,
            deviceType: this.props.giftCert.get('headerData').get('deviceType').get('id')
        });
    }

    onGcTypeChanged(e) {
        const gcType = parseInt($(e.target).val());

        this.props.headerDataChanged({
            gcType: fromJS({
                id: gcType,
                name: $('option:selected', e.target).text()
            })
        })

        this.refreshTestSelection({
            targetLab: this.props.giftCert.get('headerData').get('targetLab').get('id'),
            deviceType: deviceType
        });
    }

    formatStatusForDisplay(data) {
        return statusList.filter((item) => {
            return item.id == data
        })[0].name
    }

    onWatcherSelectAndUnselect(e) {
        var data = $(e.target).select2('data');

        let watchers = [];
        data.forEach((item) => {
            return (
                watchers.push({
                    id: item.id,
                    name: item.text
                })
            )
        })

        this.props.headerDataChanged({
            watchers: fromJS(watchers)
        })
    }

    onDivisionChanged(e) {
        let id = parseInt($(e.target).val());
        id = isNaN(id) ? 0 : id
        this.props.headerDataChanged({
            division: fromJS({
                id,
                name: $('option:selected', e.target).text()
            }),
            businessLine: fromJS({ id: 0 }),
            productLine: fromJS({ id: 0 }),
            segment: fromJS({ id: 0 })
        })
    }

    onBusinessLineChanged(e) {
        let id = parseInt($(e.target).val());
        id = isNaN(id) ? 0 : id
        this.props.headerDataChanged({
            businessLine: fromJS({
                id,
                name: $('option:selected', e.target).text()
            }),
            productLine: fromJS({ id: 0 }),
            segment: fromJS({ id: 0 })
        })
    }

    onProductLineChanged(e) {
        let id = parseInt($(e.target).val());
        id = isNaN(id) ? 0 : id
        this.props.headerDataChanged({
            productLine: fromJS({
                id,
                name: $('option:selected', e.target).text()
            }),
            segment: fromJS({ id: 0 })
        })
    }

    onSegmentChanged(e) {
        let id = parseInt($(e.target).val());
        id = isNaN(id) ? 0 : id
        this.props.headerDataChanged({
            segment: fromJS({
                id,
                name: $('option:selected', e.target).text()
            }),
        })
    }

    onSubRequestTypeChanged(e) {
        let id = parseInt($(e.target).val());
        id = isNaN(id) ? 0 : id
        this.props.headerDataChanged({
            subRequestType: fromJS({
                id,
                name: $('option:selected', e.target).text()
            }),
        })
    }

    onRequestTypeChanged(e) {
        let id = parseInt($(e.target).val());
        id = isNaN(id) ? 0 : id
        let requestType = {}
        if (id === 0) {
            requestType = fromJS({})
        } else {
            requestType = this.props.giftCert.get('requestTypeData').find((item) => item.get('id') === id)
        }

        if (!requestType.get('showTests')) {
            this.props.clearTestSelection()
        }

        if (!requestType.get('requiresLot')) {
            this.props.clearLots();
        }

        this.props.headerDataChanged({
            subRequestType: { id: 0, name: '' },
            requestType: requestType
        })
    }

    onRequesterSelectAndUnselect(e) {
        var value = $(e.target).val();
        this.props.headerDataChanged({
            requester: fromJS({
                id: value,
                name: $('option:selected', e.target).text()
            })
        });
    }

    onProjectManagerChanged(e) {
        var value = $(e.target).val();
        this.props.headerDataChanged({
            projectManager: fromJS({
                id: value,
                name: $('option:selected', e.target).text()
            })
        });
    }

    onProjectOwnerChanged(e) {
        var value = $(e.target).val();
        this.props.headerDataChanged({
            projectOwner: fromJS({
                id: value,
                name: $('option:selected', e.target).text()
            })
        });
    }

    isAnyBusinessLinesActive(businessLines) {
        let active = false;
        businessLines.forEach((item) => {
            if (item.get('active')) {
                active = this.isAnyProductLineActive(item.get('productLines'));
                return;
            }
        })

        return active;
    }

    isAnyProductLineActive(productLines) {
        let active = false;
        productLines.forEach((item) => {
            if (item.get('active')) {
                active = this.isAnySegmentActive(item.get('segments'));
                return;
            }
        })

        return active;
    }

    isAnySegmentActive(segments) {
        let active = false;
        segments.forEach((item) => {
            if (item.get('active')) {
                active = item.get('active');
                return;
            }
        })

        return active;
    }

    render() {
        if (this.props.giftCert.get('isLoading')) {
            return (<div />)
        }

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
            singleColumnRow: {
                marginRight: '15px'
            },
            userSelector: {
                width: '100%'
            },
            watchers: {
                width: '100%'
            },
            buttonActionRow: {
                marginRight: '30px'
            },
            saveAsDraftStyle: {
                marginRight: '10px',
                width: '150px'
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

        const submitButtonClasses = classnames('btn', 'btn-primary', {
            'disabled': giftCert.get('isSubmitting')
        });

        const draftLoadingIndicator = classnames('fa', {
            'fa-spinner fa-spin': giftCert.get('isSavingDraft') && giftCert.get('isSubmitting')
        });

        const submitLoadingIndicator = classnames('fa', {
            'fa-spinner fa-spin': giftCert.get('isSavingDraft') === false && giftCert.get('isSubmitting')
        });

        const saveAsDraftClass = classnames('btn', 'btn-default', {
            'disabled': giftCert.get('isSubmitting')
        });

        const headerData = giftCert.get('headerData');
        debugger;

        const requsterInputDiv = classnames('col-xs-8', {
            'has-error': headerData.get('requesterIsEmpty')
        })

        const creatorInputDiv = classnames('col-xs-8', {
            'has-error': headerData.get('creatorIsEmpty')
        })

        const gcTypeInputDiv = classnames('col-xs-8', {
            'has-error': headerData.get('gcType')
        })

        //const divisionInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('divisionIsEmpty')
        //})

        //const businessLineInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('businessLineIsEmpty')
        //})

        //const productLineInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('productLineIsEmpty')
        //})

        //const segmentInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('segmentIsEmpty')
        //})

        //const requestTypeInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('requestTypeIsEmpty')
        //})

        //const subRequestTypeInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('subRequestTypeIsEmpty')
        //})

        //const targetLabInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('targetLabIsEmpty')
        //})

        //const projectManagerInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('projectManagerIsEmpty')
        //})

        //const projectOwnerInputDiv = classnames('col-xs-8', {
        //    'has-error': headerData.get('projectOwnerIsEmpty')
        //})

        if (headerData.get('status') != 1) {
            style.saveAsDraftStyle.display = 'none'
        }

        //const requestType = headerData.get('requestType');
        //let disableSubRequestType = false;
        //if (requestType != undefined)
        //{
        //  const closeDateType = requestType.get('closeDateType');
        //  if(closeDateType === 2 && !giftCert.get('isUserAdmin'))
        //  {
        //    disableSubRequestType = true;
        //  }
        //}
        //const subRequestDisabledAttr  = {
        //  disabled: disableSubRequestType
        //}

        const headerElem = (
            <form ref='form' className='form-horizontal' method='POST' style={style.form}>
                <div className='row'>
                    <div className='form-group col-xs-6'>
                        <label className='col-xs-4 control-label'>GC Number</label>
                        <div className='col-xs-8'>
                            <input type='text' className='form-control' value={headerData.get('giftCertNo')}
                                tabIndex='1' onChange={_.partial(this.onFieldChanged, 'giftCertNo')} />
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
                        <label className='col-xs-4 control-label'>GC Type <span className='lmd-required'>*</span></label>
                        <div className={gcTypeInputDiv}>
                            <select className='form-control' onChange={this.onGcTypeChanged}
                                value={headerData.get('gcType').get('id')}
                                tabIndex='2'>
                                <option key='' value=''>Please select a gc type</option>
                                {
                                    giftCert.get('gcTypesData')
                                        .filter((item) => {
                                            return item.get('active');
                                        })
                                        .map((item) => {
                                            return (<option key={item.get('id')} value={item.get('id')}>{item.get('name')}</option>)
                                        })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='form-group col-xs-6'>
                        <label className='col-xs-4 control-label'>Creator <span className='lmd-required'>*</span></label>
                        <div className={creatorInputDiv}>
                            <input type='text' className='form-control' disabled />                                
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='form-group col-xs-6'>
                        <label className='col-xs-4 control-label'>DTI Permit No</label>
                        <div className='col-xs-8'>
                            <input type='text' className='form-control' value={headerData.get('dtiPermitNo')}
                                tabIndex='3' onChange={_.partial(this.onFieldChanged, 'dtiPermitNo')} />
                        </div>
                    </div>
                    <div className='form-group col-xs-6'>
                        <label className='col-xs-4 control-label'>QR Code</label>
                        <div className='col-xs-8'>
                            <input type='text' className='form-control' value={headerData.get('qrCode')} readOnly />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='form-group col-xs-6'>
                        <label className='col-xs-4 control-label'>Issuance Date</label>
                        <div className='col-xs-8'>
                            <DateTimePicker
                                tabIndex='4'
                                value={headerData.get('issuanceDate')}
                                onChange={this.onIssuanceDateChanged} />
                        </div>
                    </div>
                    <div className='form-group col-xs-6'>
                        <label className='col-xs-4 control-label'>Expiration Date</label>
                        <div className='col-xs-8'>
                            <DateTimePicker
                                tabIndex='7'
                                value={headerData.get('expirationDate')}
                                onChange={this.onExpirationDateChanged} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='form-group col-xs-6'>
                        <label className='col-xs-4 control-label'>Value</label>
                        <div className='col-xs-8'>
                            <input type='text' className='form-control' value={headerData.get('value')}
                                tabIndex='5' onChange={_.partial(this.onFieldChanged, 'value')} />
                        </div>
                    </div>                   
                </div>

                <div className='row' style={style.singleColumnRow}>
                    <div className='form-group col-xs-12'>
                        <label className='col-xs-2 control-label'>Note</label>
                        <div className='col-xs-10'>
                            <textarea className='form-control'
                                tabIndex='6' value={headerData.get('note')} onChange={_.partial(this.onFieldChanged, 'note')}></textarea>
                        </div>
                    </div>
                </div>

            </form>
        );

        const isUserAdmin = giftCert.get('isUserAdmin');

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
                    <div className='panel-body'><GcServiceList /></div>
                </div>

                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <h4>Outlet</h4>
                    </div>

                </div>

                <div className='row' style={style.buttonActionRow}>
                    <div className='form-group col-xs-12'>
                        <button type='submit' className={saveAsDraftClass} style={style.saveAsDraftStyle}
                            onClick={(e) => this.onSubmitClicked(e, true)}
                            name='submit' value='saveAsDraft'><i className={draftLoadingIndicator} /> Save As Draft</button>
                        <button type='submit' className={submitButtonClasses} style={style.submitStyle}
                            onClick={(e) => this.onSubmitClicked(e, false)}
                            name='submit' value='submit'><i className={submitLoadingIndicator} /> Submit</button>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps({ giftCert }) {
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
    //  addDeviceModal: addDeviceModalReducer,
    //  addLotModal: addLotModalReducer,
    // removeDeviceModal: removeDeviceModalReducer,
    // removeLotModal: removeLotModalReducer,
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
            <GiftCertFormContainer />
            <ReduxToastr />
        </div>
    </Provider>,
    document.getElementById('content')
);
