import { Map, List, fromJS } from 'Immutable'
import moment from 'moment'
import uuid from 'uuid'

import {
    SET_INITIAL_DATA, DIVISIONS_LOADED, GC_TYPE_LOADED, REQUEST_TYPE_LOADED, HEADER_DATA_CHANGES, TARGET_LABS_LOADED, ADD_DEVICE, ADD_LOT,
    REMOVE_DEVICE, REMOVE_LOT, CHARACTERISTIC_CHANGED, TEST_SELECTION_LOADED, ADD_TEST_SELECTION, REMOVE_TEST_SELECTION,
    TEST_MODIFIED, CONDITION_MODIFIED, FORM_DATA_CHANGED, CHANNEL_LOADED, CLEAR_TEST_SELECTION, COPY_TEST_SELECTION,
    SET_ADMIN_STATE, COMMENTS_CHANGED, ACTION_DATA_CHANGED, SUB_REQUEST_TYPE_LOADED,
    CLEAR_LOTS
} from './ActionTypes'

const initialState = fromJS({
    isUserAdmin: false,
    isLoading: true,
    isSavingDraft: false,
    isSubmitting: false,
    headerData: {
        // requester: { id: 0, name: '' },
        creator: { id: 0, name: '' },
        gcType: { id: 0, name: '' },
        giftCertNo: '',
        dtiPermitNo: '',
        qrCode: '',
        issuanceDate: undefined,
        expirationDate: undefined,
        value: ''

        //division: { id: 0, name: '' },
        //businessLine: { id: 0, name: '' },
        //productLine: { id: 0, name: '' },
        //segment: { id: 0, name: '' },
        //requestType: { id: 0, name: '', limitDevices: true, closeDateType: 1  } ,
        //subRequestType: { id: 0, name: '' } ,
        //targetLab: { id: 0, name: '' },
        //priority: 0,
        //projectManager: { id: 0, name: '' },
        //projectOwner: { id: 0, name: '' },

        //referenceProjectCode: '',
        //watchers: [],
        //requestDate: null
    },
    divisionsData: [],
    requestTypeData: [],
    subRequestTypeData: [],
    targetLabsData: [],
    gcTypesData: [],
    channelsData: [],
    devices: [],
    deviceConfidentiality: '',
    tests: [],
    testSelectionData: [],
    comments: {
        adminSupportComments: '',
        reviewerComments: '',
        datasheetProcessorComments: ''
    },
    actions: {
        requestDate: undefined,
        requestedBy: { id: 0, fullName: '' },
        partsReceivedDate: undefined,
        partsReceivedBy: { id: 0, fullName: '' },
        managerAcceptedDate: undefined,
        managerAcceptedBy: { id: 0, fullName: '' },
        releasedToLabDate: undefined,
        releasedToLabBy: { id: 0, fullName: '' },
        rejectedToRequesterDate: undefined,
        rejectedToRequesterBy: { id: 0, fullName: '' },
        dataAcceptedDate: undefined,
        dataAcceptedBy: { id: 0, fullName: '' },
        datasheetAcceptedDate: undefined,
        datasheetAcceptedBy: { id: 0, fullName: '' },
        dataSheetApprovalDate: undefined,
        dataSheetApprovalBy: { id: 0, fullName: '' },
        datasheetRejectedDate: undefined,
        datasheetRejectedBy: { id: 0, fullName: '' },
        firstReviewDate: undefined,
        firstReviewBy: { id: 0, fullName: '' },
        nthReviewDate: undefined,
        nthReviewBy: { id: 0, fullName: '' },
        toWebDate: undefined,
        toWebBy: { id: 0, fullName: '' },
        canceledDate: undefined,
        canceledBy: { id: 0, fullName: '' },
        closedDate: undefined,
        closedBy: { id: 0, fullName: '' }
    }
});

function convertDateToMoment(date) {
    if (date != null) {
        return moment(date)
    }

    return undefined
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ADMIN_STATE:
            return state.set('isUserAdmin', true)
        case COMMENTS_CHANGED:
            return state.set('comments', state.get('comments').merge(fromJS(action.changes)))
        case ACTION_DATA_CHANGED:
            {
                return state.set('actions', state.get('actions').merge(fromJS(action.changes)))
            }
        case SET_INITIAL_DATA:
            const request = action.data;
            debugger;
            const defaultHeaderData = initialState.get('headerData');
            const defaultActions = initialState.get('actions');

            //let watchers = []

            //request.watchers.forEach((watcher) => {
            //  watchers.push(watcher)
            //})

            let newHeaderData = {
                id: request.id || 0,

                giftCertNo: request.giftCertNo || defaultHeaderData.get('giftCertNo'),
                status: request.status,
                gcType: request.gcType || defaultHeaderData.get('gcType'),
                creator: request.creator,
                dtiPermitNo: request.giftCertNo || defaultHeaderData.get('dtiPermitNo'),
                issuanceDate: convertDateToMoment(request.issuanceDate),
                expirationDate: convertDateToMoment(request.expirationDate),
                value: request.giftCertNo || defaultHeaderData.get('value'),
                note: request.note || defaultHeaderData.get('note'),

                //requester: request.requester,                                             
                //division: request.division || defaultHeaderData.get('division'),
                //businessLine: request.businessLine || defaultHeaderData.get('businessLine'),
                //productLine: request.productLine || defaultHeaderData.get('productLine'),
                //segment: request.segment || defaultHeaderData.get('segment'),
                //requestType: request.requestType || defaultHeaderData.get('requestType'),
                //subRequestType: request.subRequestType || defaultHeaderData.get('subRequestType'),
                //targetLab: request.targetLab || defaultHeaderData.get('targetLab'),
                
                //priority: request.priority || defaultHeaderData.get('priority'),
                //projectManager: request.projectManager || defaultHeaderData.get('projectManager'),
                //projectOwner: request.projectOwner || defaultHeaderData.get('projectOwner'),
                //requesterComments: request.requesterComments || defaultHeaderData.get('requesterComments'),
                //projectCode: request.projectCode || defaultHeaderData.get('projectCode'),
                //referenceProjectCode: request.referenceProjectCode || defaultHeaderData.get('referenceProjectCode'),
                //  watchers: watchers,
              //  requestDate: request.requestDate || defaultHeaderData.get('requestDate'),
            }

            let newDevices = request.devices || initialState.get('devices')
            let deviceConfidentiality = request.deviceConfidentiality || initialState.get('deviceConfidentiality')
            const newTests = request.testSelection || initialState.get('tests')

            for (let idx = 0; idx < newDevices.length; idx++) {
                let device = newDevices[idx]

                if (device.channel == null) {
                    device.channel = { id: 0 }
                }
            }

            return state.merge({
                isLoading: false,
                headerData: fromJS(newHeaderData),
                devices: fromJS(newDevices),
                deviceConfidentiality: fromJS(deviceConfidentiality),
                tests: fromJS(newTests.map((item) => {
                    item.uuid = uuid.v4();
                    return item;
                })),
                comments: fromJS({
                    adminSupportComments: request.adminSupportComments,
                    reviewerComments: request.reviewerComments,
                    datasheetProcessorComments: request.datasheetProcessorComments,
                }),
                actions: {
                    requestDate: convertDateToMoment(request.requestDate),
                    requestedBy: request.requester || defaultActions.get('requestedBy'),
                    partsReceivedDate: convertDateToMoment(request.partsReceivedDate),
                    partsReceivedBy: request.partsReceivedBy || defaultActions.get('partsReceivedBy'),
                    managerAcceptedDate: convertDateToMoment(request.managerAcceptedDate),
                    managerAcceptedBy: request.managerAcceptedBy || defaultActions.get('managerAcceptedBy'),
                    releasedToLabDate: convertDateToMoment(request.releasedToLabDate),
                    releasedToLabBy: request.releasedToLabBy || defaultActions.get('releasedToLabBy'),
                    rejectedToRequesterDate: convertDateToMoment(request.rejectedToRequesterDate),
                    rejectedToRequesterBy: request.rejectedToRequesterBy || defaultActions.get('rejectedToRequesterBy'),
                    dataAcceptedDate: convertDateToMoment(request.dataAcceptedDate),
                    dataAcceptedBy: request.dataAcceptedBy || defaultActions.get('dataAcceptedBy'),
                    datasheetAcceptedDate: convertDateToMoment(request.datasheetAcceptedDate),
                    datasheetAcceptedBy: request.datasheetAcceptedBy || defaultActions.get('datasheetAcceptedBy'),
                    dataSheetApprovalDate: convertDateToMoment(request.dataSheetApprovalDate),
                    dataSheetApprovalBy: request.dataSheetApprovalBy || defaultActions.get('dataSheetApprovalBy'),
                    datasheetRejectedDate: convertDateToMoment(request.datasheetRejectedDate),
                    datasheetRejectedBy: request.datasheetRejectedBy || defaultActions.get('datasheetRejectedBy'),
                    firstReviewDate: convertDateToMoment(request.firstReviewDate),
                    firstReviewBy: request.firstReviewBy || defaultActions.get('firstReviewBy'),
                    nthReviewDate: convertDateToMoment(request.nthReviewDate),
                    nthReviewBy: request.nthReviewBy || defaultActions.get('nthReviewBy'),
                    toWebDate: convertDateToMoment(request.toWebDate),
                    toWebBy: request.toWebBy || defaultActions.get('toWebBy'),
                    canceledDate: convertDateToMoment(request.canceledDate),
                    canceledBy: request.canceledBy || defaultActions.get('canceledBy'),
                    closedDate: convertDateToMoment(request.closedDate),
                    closedBy: request.closedBy || defaultActions.get('closedBy'),
                }
            });
        case SUB_REQUEST_TYPE_LOADED:
            return state.set('subRequestTypeData', fromJS(action.subRequestTypes))
        case CHANNEL_LOADED:
            return state.set('channelsData', fromJS(action.channels))
        case TARGET_LABS_LOADED:
            {
                var headerData = state.get('headerData')
                // Based On -	CTT-45 - The target lab
                // Target Lab should default to ELS-EVL1,
                // but since we allow user to add more target lab.. we fixed to the first one
                return state.merge({
                    headerData: headerData.set('targetLab', fromJS(action.targetLabs[0])),
                    targetLabsData: fromJS(action.targetLabs)
                })
            }
        case CLEAR_LOTS:
            {
                let devices = state.get('devices');
                for (let idx = 0; idx < devices.count(); idx++) {
                    devices = devices.setIn([idx, 'lots'], fromJS([]))
                }

                return state.merge({
                    devices: devices
                })
            }
        case DIVISIONS_LOADED:
            return state.set('divisionsData', fromJS(action.divisions))
        case REQUEST_TYPE_LOADED:
            return state.set('requestTypeData', fromJS(action.requestTypes))
        case GC_TYPE_LOADED:
            return state.set('gcTypesData', fromJS(action.gcTypes))
        case FORM_DATA_CHANGED:
            return state.merge(action.changes);
        case HEADER_DATA_CHANGES:
            var headerData = state.get('headerData')
            var newHeaderData = headerData.merge(action.changes);
            return state.set('headerData', newHeaderData);
        case ADD_DEVICE:
            {
                let device = action.device.set('lots', fromJS([]))

                var idx = state.get('devices').findIndex((item) =>
                    item.get('partNumber') === device.get('partNumber'));

                if (idx >= 0) {
                    return state;
                }

                const channel = device.get('channel');
                if (channel === undefined || channel === null) {
                    device = device.set('channel', fromJS({}))
                }

                if (!state.get('headerData').get('requestType').get('isCharacteristicsMandatory')
                    && !device.get('isReadOnly')) {
                    const na = 'N/A'
                    device = device.merge({
                        channel: {
                            id: 0,
                            name: na
                        },
                        vgsMax: na,
                        numBondWires: na,
                        dieDimension: na,
                        vsd: na,
                        idssMax125: na,
                        isReadOnly: false,
                        idssMax25: na,
                        rdsVceMax: na,
                        tjMax: na,
                        vgsThMax: na,
                        rgMax: na,
                        bvdss: na,
                        rthPcbMount: na,
                        internalRg: na,
                        activeArea: na,
                        igssMaxVgsMinus: na,
                        dieThickness: na,
                        bondWireDiameter: na,
                        igssMaxVgsPlus: na,
                        generation: na,
                        rdsVceTypical: na,
                        vgsThTypical: na,
                        rgTypical: na,
                        vgsThMin: na,
                        hexSize: na,
                        gateOxideThickness: na
                    })
                }

                const newList = state.get('devices')
                    .push(device)

                return state.merge({
                    devices: newList
                })
            }
        case ADD_LOT:
            const devices = state.get('devices')

            const idx = devices.findIndex((item) => {
                return item.get('partNumber') === action.device.get('partNumber')
            });

            const currentDevice = devices.get(idx)
            const newLots = currentDevice.get('lots').push(action.lot)
            const newDevice = currentDevice.set('lots', newLots)

            return state.merge({
                devices: devices.set(idx, newDevice)
            })
        case REMOVE_DEVICE:
            const deviceListAfterRemove = state.get('devices').filter((item) => {
                return item.get('partNumber') !== action.device.get('partNumber')
            });

            return state.merge({
                devices: deviceListAfterRemove
            })
        case REMOVE_LOT:
            {
                const devices = state.get('devices')

                const idx = devices.findIndex((item) => {
                    return item.get('partNumber') === action.device.get('partNumber')
                });

                const currentDevice = devices.get(idx)
                const newLots = currentDevice.get('lots').filter((item) => {
                    return item !== action.lot
                })

                const newDevice = currentDevice.set('lots', newLots)

                return state.merge({
                    devices: devices.set(idx, newDevice)
                })
            }
        case CHARACTERISTIC_CHANGED:
            {
                const devices = state.get('devices')

                const idx = devices.findIndex((item) => {
                    return item.get('partNumber') === action.partNumber
                });

                const currentDevice = devices.get(idx);

                return state.merge({
                    devices: devices.set(idx, currentDevice.merge(action.changes))
                })
            }
        case TEST_SELECTION_LOADED:
            {
                // remove tests that are not in testSelections
                let validTests = List([]);

                var tests = state.get('tests');

                tests.forEach((test) => {
                    action.testSelections.forEach((selection) => {
                        if (test.get('testSelection').get('id') === selection.id) {
                            validTests = validTests.push(test)
                        }
                    })
                })

                return state.merge({
                    tests: validTests,
                    testSelectionData: action.testSelections
                })
            }
        case ADD_TEST_SELECTION:
            {
                const tests = state.get('tests')

                let conditionSelections = [];

                action.test.get('conditions').forEach((condition) => {
                    conditionSelections.push({
                        condition: condition
                    })
                });

                var test = fromJS({
                    testSelection: action.test,
                    conditionSelections: conditionSelections,
                    uuid: uuid.v4()
                });

                if (tests.has(test)) {
                    return state;
                }

                return state.merge({
                    tests: tests.push(test)
                })
            }
        case COPY_TEST_SELECTION:
            {
                const source = action.test.toJS();

                let newTest = {
                    testSelection: source.testSelection,
                    conditionSelections: [],
                    numTemperatures: source.numTemperatures,
                    temperature: source.temperature,
                    numOfDevices: source.numOfDevices,
                    comments: source.comments
                }

                source.conditionSelections.forEach((item) => {
                    let newConditionSelection = {
                        condition: item.condition,
                        value: item.value
                    }

                    if (item.condition.stepApplicable) {
                        newConditionSelection.stepFrom = item.stepFrom;
                        newConditionSelection.stepTo = item.stepTo;
                        newConditionSelection.stepping = item.stepping;
                    }

                    newTest.conditionSelections.push(newConditionSelection)
                })

                return state.merge({
                    tests: state.get('tests').push(fromJS(newTest))
                })

                return state;
            }
        case REMOVE_TEST_SELECTION:
            {
                const testsAfterRemove = state.get('tests').filter((item) => {
                    return item.get('uuid') !== action.test.get('uuid')
                });

                return state.merge({
                    tests: testsAfterRemove
                })
            }
        case TEST_MODIFIED:
            {
                const payload = action.payload;
                const currentTest = payload.test

                const idx = state.get('tests').findIndex((item) => {
                    return item.get('uuid') === currentTest.get('uuid');
                });

                const test = state.get('tests').get(idx);
                var newTest = test.merge(payload.changes)

                return state.merge({
                    tests: state.get('tests').set(idx, newTest)
                })
            }
        case CONDITION_MODIFIED:
            {
                const payload = action.payload;

                const testIdx = state.get('tests').findIndex((item) => {
                    return item.get('uuid') == payload.test.get('uuid');
                });

                const test = state.get('tests').get(testIdx);

                const conditionIdx = test.get('conditionSelections').findIndex((item) => {
                    return item.get('condition') == payload.condition;
                });

                const conditionSelection = test.get('conditionSelections').get(conditionIdx);
                const newConditionSelection = conditionSelection.merge(payload.changes);

                const newConditionList = test.get('conditionSelections').set(conditionIdx, newConditionSelection)

                const newTest = test.set('conditionSelections', newConditionList);

                return state.merge({
                    tests: state.get('tests').set(testIdx, newTest)
                })
            }
        case CLEAR_TEST_SELECTION:
            {
                return state.merge({
                    tests: fromJS([])
                })
            }
        default:
            return state;
    }
}
