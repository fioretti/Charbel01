import {
    SET_INITIAL_DATA, DIVISIONS_LOADED, GC_TYPE_LOADED, REQUEST_TYPE_LOADED, HEADER_DATA_CHANGES, TARGET_LABS_LOADED, ADD_DEVICE, ADD_LOT,
    REMOVE_DEVICE, REMOVE_LOT, CHARACTERISTIC_CHANGED, TEST_SELECTION_LOADED, ADD_TEST_SELECTION, REMOVE_TEST_SELECTION,
    TEST_MODIFIED, CONDITION_MODIFIED, FORM_DATA_CHANGED, CHANNEL_LOADED, CLEAR_TEST_SELECTION, COPY_TEST_SELECTION,
    SET_ADMIN_STATE, COMMENTS_CHANGED, ACTION_DATA_CHANGED, SUB_REQUEST_TYPE_LOADED,
    CLEAR_LOTS
} from './ActionTypes'

import { toastr } from 'react-redux-toastr'

import * as dataUtils from 'Utils/DataUtils'
import * as uiUtils from 'Utils/UiUtils'
import * as api from 'Utils/Api'

import { testValidationState, conditionValidationState } from 'Utils/TestValidationUtils'

export function clearLots() {
    return {
        type: CLEAR_LOTS
    }
}

export function commentsChanged(changes) {
    return {
        type: COMMENTS_CHANGED,
        changes
    }
}

export function setAdminState() {
    return {
        type: SET_ADMIN_STATE
    }
}

export function subRequestTypesLoaded(subRequestTypes) {
    return {
        type: SUB_REQUEST_TYPE_LOADED,
        subRequestTypes
    }
}

export function divisionsLoaded(divisions) {
    return {
        type: DIVISIONS_LOADED,
        divisions
    }
}

export function gcTypesLoaded(gcTypes) {
    return {
        type: GC_TYPE_LOADED,
        gcTypes
    }
}

export function setInitialDataAndHandle(data) {
    return (dispatch) => {
        const i = dispatch(setInitialData(data))

        let testSelectionReqParam = {}

        if (data.targetLab != null) {
            testSelectionReqParam.targetLab = data.targetLab.id;
        }

        if (data.deviceType != null) {
            testSelectionReqParam.deviceType = data.deviceType.id;
        }

        if (testSelectionReqParam.targetLab && testSelectionReqParam.deviceType) {
            api.getTestSelection(testSelectionReqParam, (data) => {
                dispatch(testSelectionLoaded(data))
            });
        }
    }
}


function setInitialData(data) {
    return {
        type: SET_INITIAL_DATA,
        data
    }
}

export function requestTypeLoaded(requestTypes) {
    return {
        type: REQUEST_TYPE_LOADED,
        requestTypes: requestTypes
    }
}

export function headerDataChanged(changes) {
    return {
        type: HEADER_DATA_CHANGES,
        changes
    }
}

export function targetlabsLoaded(targetLabs) {
    return {
        type: TARGET_LABS_LOADED,
        targetLabs
    }
}

export function addDevice(device) {
    return {
        type: ADD_DEVICE,
        device
    }
}

export function removeDevice(device) {
    return {
        type: REMOVE_DEVICE,
        device
    }
}

export function addLot(data) {
    return {
        type: ADD_LOT,
        lot: data.lot,
        device: data.device
    }
}

export function removeLotFromDevice(data) {
    return {
        type: REMOVE_LOT,
        lot: data.lot,
        device: data.device
    }
}

export function characteristicChanged(partNumber, changes) {
    return {
        type: CHARACTERISTIC_CHANGED,
        partNumber,
        changes
    }
}

export function testSelectionLoaded(testSelections) {
    return {
        type: TEST_SELECTION_LOADED,
        testSelections
    }
}

export function addTest(test) {
    return {
        type: ADD_TEST_SELECTION,
        test
    }
}

export function clearTestSelection() {
    return {
        type: CLEAR_TEST_SELECTION,
    }
}

export function removeTest(test) {
    return {
        type: REMOVE_TEST_SELECTION,
        test
    }
}

export function copyTest(test) {
    return {
        type: COPY_TEST_SELECTION,
        test
    }
}

export function testModified(payload) {
    return {
        type: TEST_MODIFIED,
        payload
    }
}

export function conditionModified(payload) {
    return {
        type: CONDITION_MODIFIED,
        payload
    }
}

export function formDataChanged(changes) {
    return {
        type: FORM_DATA_CHANGED,
        changes
    }
}

export function actionDataChanged(changes) {
    return {
        type: ACTION_DATA_CHANGED,
        changes
    }
}

export function channelLoaded(channels) {
    return {
        type: CHANNEL_LOADED,
        channels
    }
}

export function addTestRequest(testRequest, isSavingDraft) {
    return (dispatch) => {
        resetDeviceCharErrorState(dispatch, testRequest);
        resetHeaderDataErrorState(dispatch);

        if (isHeaderDataValid(dispatch, testRequest, isSavingDraft)
            && isDeviceCountValid(dispatch, testRequest, isSavingDraft)
            && isTestRequestDeviceCharacteristicValid(dispatch, testRequest, isSavingDraft)
            && isLotRequiredAndIncluded(dispatch, testRequest, isSavingDraft)
            && isTestsValid(dispatch, testRequest, isSavingDraft)) {

            let postData = {
                ...testRequest.get('headerData').toJS(),
                devices: testRequest.get('devices').toJS(),
                testSelection: testRequest.get('tests').toJS(),
                isDraft: isSavingDraft,
                ...testRequest.get('comments').toJS(),
                ...testRequest.get('actions').toJS()
            }

            const requestedCompletionDate = testRequest.get('headerData').get('requestedCompletionDate');
            if (requestedCompletionDate) {
                postData.requestedCompletionDate = requestedCompletionDate.toJSON();
            }

            const actions = testRequest.get('actions')

            const requestDate = actions.get('requestDate')
            if (requestDate) {
                postData.requestDate = requestDate.toJSON()
            }

            const partsReceivedDate = actions.get('partsReceivedDate')
            if (partsReceivedDate) {
                postData.partsReceivedDate = partsReceivedDate.toJSON()
            }

            const managerAcceptedDate = actions.get('managerAcceptedDate')
            if (managerAcceptedDate) {
                postData.managerAcceptedDate = managerAcceptedDate.toJSON()
            }

            const releasedToLabDate = actions.get('releasedToLabDate')
            if (releasedToLabDate) {
                postData.releasedToLabDate = releasedToLabDate.toJSON()
            }

            const rejectedToRequesterDate = actions.get('rejectedToRequesterDate')
            if (rejectedToRequesterDate) {
                postData.rejectedToRequesterDate = rejectedToRequesterDate.toJSON()
            }

            const dataAcceptedDate = actions.get('dataAcceptedDate')
            if (dataAcceptedDate) {
                postData.dataAcceptedDate = dataAcceptedDate.toJSON()
            }

            const datasheetAcceptedDate = actions.get('datasheetAcceptedDate')
            if (datasheetAcceptedDate) {
                postData.datasheetAcceptedDate = datasheetAcceptedDate.toJSON()
            }

            const dataSheetApprovalDate = actions.get('dataSheetApprovalDate')
            if (dataSheetApprovalDate) {
                postData.dataSheetApprovalDate = dataSheetApprovalDate.toJSON()
            }

            const datasheetRejectedDate = actions.get('datasheetRejectedDate')
            if (datasheetRejectedDate) {
                postData.datasheetRejectedDate = datasheetRejectedDate.toJSON()
            }

            const firstReviewDate = actions.get('firstReviewDate')
            if (firstReviewDate) {
                postData.firstReviewDate = firstReviewDate.toJSON()
            }

            const nthReviewDate = actions.get('nthReviewDate')
            if (nthReviewDate) {
                postData.nthReviewDate = nthReviewDate.toJSON()
            }

            const toWebDate = actions.get('toWebDate')
            if (toWebDate) {
                postData.toWebDate = toWebDate.toJSON()
            }

            const canceledDate = actions.get('canceledDate')
            if (canceledDate) {
                postData.canceledDate = canceledDate.toJSON()
            }

            const closedDate = actions.get('closedDate')
            if (closedDate) {
                postData.closedDate = closedDate.toJSON()
            }

            const self = this;

            dispatch(formDataChanged({
                isSavingDraft: isSavingDraft,
                isSubmitting: true
            }));

            // Disabled according to LMD-321
            //if (postData.devices.length > 0) {
            //uiUtils.showConfirmationDialogForExportControl({
            //  onSuccess: (checked, callback) => {
            sendTestRequest(postData);
            //  },
            //  onCancel: (callback) => {
            //    dispatch(formDataChanged({
            //      isSavingDraft: false,
            //      isSubmitting: false
            //    }));
            //    callback();
            //  }
            //})
            //} else {
            //  sendTestRequest(postData);
            //}
        }
    }
}

function sendTestRequest(postData) {
    api.addTestRequest(postData, (data) => {
        uiUtils.redirect('MyRequests/Index')
        dispatch(formDataChanged({
            isSavingDraft: false,
            isSubmitting: false
        }));
    });
}

function resetDeviceCharErrorState(dispatch, testRequest) {
    testRequest.get('devices').forEach((device, idx) => {
        if (device.get('isReadOnly')) {
            return;
        }

        const changes = {
            hexSizeIsEmpty: false,
            generationIsEmpty: false,
            dieDimensionIsEmpty: false,
            dieThicknessIsEmpty: false,
            activeAreaIsEmpty: false,
            gateOxideThicknessIsEmpty: false,
            numBondWiresIsEmpty: false,
            bondWireDiameterIsEmpty: false,
            channelIsEmpty: false,
            vsdIsEmpty: false,
            bvdssIsEmpty: false,
            tjMaxIsEmpty: false,
            rdsVceTypicalIsEmpty: false,
            rdsVceMaxIsEmpty: false,
            vgsMaxIsEmpty: false,
            internalRgIsEmpty: false,
            idssMax25IsEmpty: false,
            idssMax125IsEmpty: false,
            igssMaxVgsPlusIsEmpty: false,
            igssMaxVgsMinusIsEmpty: false,
            rgTypicalIsEmpty: false,
            rgMaxIsEmpty: false,
            vgsThMinIsEmpty: false,
            vgsThTypicalIsEmpty: false,
            vgsThMaxIsEmpty: false,
            rthPcbMountIsEmpty: false
        };

        dispatch(characteristicChanged(device.get('partNumber'), changes))
    })
}

function resetHeaderDataErrorState(dispatch) {
    const changes = {
        requesterIsEmpty: false,
        creatorIsEmpty: false,
        gcTypeIsEmpty: false,
        divisionIsEmpty: false,
        businessLineIsEmpty: false,
        productLineIsEmpty: false,
        segmentIsEmpty: false,
        requestTypeIsEmpty: false,
        targetLabIsEmpty: false,
        projectManagerIsEmpty: false,
        projectOwnerIsEmpty: false,
        subRequestTypeIsEmpty: false
    }

    dispatch(headerDataChanged(changes))
}

function isHeaderDataValid(dispatch, testRequest, isDraft) {
    const headerData = testRequest.get('headerData');

    let changes = {
        requesterIsEmpty: headerData.get('requester').get('id') < 1,
        creatorIsEmpty: headerData.get('creator').get('id') < 1
    }

    if (!isDraft) {
        changes = {
            ...changes,
            gcTypeIsEmpty: headerData.get('gcType').get('id') < 1,
            divisionIsEmpty: headerData.get('division').get('id') < 1,
            businessLineIsEmpty: headerData.get('businessLine').get('id') < 1,
            productLineIsEmpty: headerData.get('productLine').get('id') < 1,
            segmentIsEmpty: headerData.get('segment').get('id') < 1,
            requestTypeIsEmpty: headerData.get('requestType').get('id') < 1,
            targetLabIsEmpty: headerData.get('targetLab').get('id') < 1,
            projectManagerIsEmpty: headerData.get('projectManager').get('id') < 1,
            projectOwnerIsEmpty: headerData.get('projectOwner').get('id') < 1,
            subRequestTypeIsEmpty: headerData.get('requestType').get('closeDateType') === 1 && headerData.get('subRequestType').get('id') < 1
        }
    }

    dispatch(headerDataChanged(changes))

    const isValid = !dataUtils.hasTrueValue(changes);

    if (!isValid) {
        toastr.error("Please complete header data.")
    }

    return isValid;
}

function isDeviceCountValid(dispatch, testRequest, isDraft) {
    if (testRequest.get('devices').count() == 0) {
        // by pass validation if isDraft and has no devices
        return true;
    }

    if (!testRequest.get('headerData').get('requestType').get('limitDevices')) {
        return true;
    }

    if (testRequest.get('devices').count() > 1) {
        // at least 1 device for non draft
        toastr.error('Only 1 device is allowed for this request type')
        return false;
    }

    return true;
}

function isTestRequestDeviceCharacteristicValid(dispatch, testRequest, isDraft) {
    if (!isDraft && testRequest.get('devices').count() == 0) {
        toastr.error('At least one device must be added')
        return false;
    }

    const headerData = testRequest.get('headerData');
    const requestType = headerData.get('requestType');

    if (!headerData.get('requestType').get('isCharacteristicsMandatory')) {
        return true;
    }

    let isValid = true;

    testRequest.get('devices').forEach((device, idx) => {
        if (device.get('isReadOnly')) {
            return;
        }

        const changes = {
            hexSizeIsEmpty: dataUtils.isEmpty(device.get('hexSize')),
            generationIsEmpty: dataUtils.isEmpty(device.get('generation')),
            dieDimensionIsEmpty: dataUtils.isEmpty(device.get('dieDimension')),
            dieThicknessIsEmpty: dataUtils.isEmpty(device.get('dieThickness')),
            activeAreaIsEmpty: dataUtils.isEmpty(device.get('activeArea')),
            gateOxideThicknessIsEmpty: dataUtils.isEmpty(device.get('gateOxideThickness')),
            numBondWiresIsEmpty: dataUtils.isEmpty(device.get('numBondWires')),
            bondWireDiameterIsEmpty: dataUtils.isEmpty(device.get('bondWireDiameter')),
            channelIsEmpty: !(device.get('channel').get('id') >= 0),
            vsdIsEmpty: dataUtils.isEmpty(device.get('vsd')),
            bvdssIsEmpty: dataUtils.isEmpty(device.get('bvdss')),
            tjMaxIsEmpty: dataUtils.isEmpty(device.get('tjMax')),
            rdsVceTypicalIsEmpty: dataUtils.isEmpty(device.get('rdsVceTypical')),
            rdsVceMaxIsEmpty: dataUtils.isEmpty(device.get('rdsVceMax')),
            vgsMaxIsEmpty: dataUtils.isEmpty(device.get('vgsMax')),
            internalRgIsEmpty: dataUtils.isEmpty(device.get('internalRg')),
            idssMax25IsEmpty: dataUtils.isEmpty(device.get('idssMax25')),
            idssMax125IsEmpty: dataUtils.isEmpty(device.get('idssMax125')),
            igssMaxVgsPlusIsEmpty: dataUtils.isEmpty(device.get('igssMaxVgsPlus')),
            igssMaxVgsMinusIsEmpty: dataUtils.isEmpty(device.get('igssMaxVgsMinus')),
            rgTypicalIsEmpty: dataUtils.isEmpty(device.get('rgTypical')),
            rgMaxIsEmpty: dataUtils.isEmpty(device.get('rgMax')),
            vgsThMinIsEmpty: dataUtils.isEmpty(device.get('vgsThMin')),
            vgsThTypicalIsEmpty: dataUtils.isEmpty(device.get('vgsThTypical')),
            vgsThMaxIsEmpty: dataUtils.isEmpty(device.get('vgsThMax')),
            rthPcbMountIsEmpty: dataUtils.isEmpty(device.get('rthPcbMount'))
        };

        dispatch(characteristicChanged(device.get('partNumber'), changes));

        if (dataUtils.hasTrueValue(changes)) {
            toastr.error('Incomplete device characteristics for ' + device.get('partNumber'));
            isValid = false;
        }
    })

    return isValid;
}

function isLotRequiredAndIncluded(dispatch, testRequest, isDraft) {
    if (isDraft) {
        return true;
    }

    const requiresLot = testRequest.getIn(['headerData', 'requestType', 'requiresLot']);
    if (!requiresLot) {
        return true;
    }

    let isValid = true;

    testRequest.get('devices').forEach((device, idx) => {
        const changes = {
            isLotEmpty: device.get('lots').count() == 0
        }

        dispatch(characteristicChanged(device.get('partNumber'), changes));

        if (changes.isLotEmpty) {
            toastr.error('At least one lot is required for ' + device.get('partNumber'))
            isValid = false;
        }
    })

    return isValid;
}

function isTestsValid(dispatch, testRequest, isDraft) {
    const tests = testRequest.get('tests');
    const requiresTest = testRequest.getIn(['headerData', 'requestType', 'showTests']);

    let isValid = true;

    if (!isDraft && requiresTest) {
        if (tests == undefined || tests.size == 0) {
            toastr.error('At least one test must be selected.');
            isValid = false;
        }
    }

    tests.forEach((test) => {
        let isSectionValid = true;

        const testChanges = testValidationState(test);

        const testSelection = test.get('testSelection');
        dispatch(testModified({
            test: test,
            testSelection: testSelection,
            changes: testChanges
        }));

        if (dataUtils.hasTrueValue(testChanges)) {
            isSectionValid = false;
        }

        const conditionSelections = test.get('conditionSelections');

        conditionSelections.forEach((conditionSelection) => {
            const conditionChanges = conditionValidationState(conditionSelection);

            if (dataUtils.hasTrueValue(conditionChanges)) {
                isSectionValid = false;
            }

            const condition = conditionSelection.get('condition');
            dispatch(conditionModified({
                test: test,
                testSelection: testSelection,
                condition: condition,
                changes: conditionChanges
            }))
        })

        if (!isSectionValid) {
            toastr.error('Incomplete or invalid test data for ' + testSelection.get('name'))
            isValid = false;
        }
    })

    return isValid;
}
