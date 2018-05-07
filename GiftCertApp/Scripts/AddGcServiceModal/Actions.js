import { OPEN_MODAL, CLOSE_MODAL, FETCH_PACKAGE_TYPE, FETCH_PART_DATA,
  FORM_DATA_CHANGES, FETCH_PACKAGE_TYPE_SUCCESS, FETCH_PART_DATA_SUCCESS,
  RESET_ERRORS_STATE, SHOW_ERROR } from './ActionTypes'

import * as api from 'Utils/Api'
import * as dataUtils from 'Utils/DataUtils'
import * as testRequestFormAction from 'TestRequestForm/Actions'

export function openModal() {
  return {
    type: OPEN_MODAL
  }
}

export function fieldChanged(changes) {
  return {
    type: FORM_DATA_CHANGES,
    changes
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function addDeviceToTestRequest(device){
  return (dispatch) => {
    dispatch(resetErrorsState());

    if (dataUtils.isEmpty(device.get('partNumber'))) {
      dispatch(showMissingPartNumber());
      return;
    }

    if (device.get('packageType').get('id') <= 0) {
      dispatch(showMissingPackageType());
      return;
    }

    dispatch(testRequestFormAction.addDevice(device))
    dispatch(closeModal())
  }
}

function resetErrorsState() {
  return {
    type: RESET_ERRORS_STATE
  }
}

function showMissingPartNumber() {
  return {
    type: SHOW_ERROR,
    message: 'Please type part number.'
  }
}

function showMissingPackageType() {
  return {
    type: SHOW_ERROR,
    message: 'Please select a package type.'
  }
}

function showMissingPartNumber() {
  return {
    type: SHOW_ERROR,
    message: 'Incorrect part number format. Part number must contains at least 1 character.'
  }
}

export function checkPartNumberAndHandleResult(partNumber) {
  return (dispatch) => {
    partNumber = dataUtils.trim(partNumber);

    dispatch(fieldChanged({
      search: partNumber
    }))

    dispatch(resetErrorsState());

    if (dataUtils.isEmpty(partNumber)) {
      dispatch(showMissingPartNumber());
      return;
    }

    if (!dataUtils.validPartNumber(partNumber)) {
      dispatch(showMissingPartNumber());
      return;
    }

    dispatch(checkPartNumber());

    api.checkPartNumber(partNumber, (data) => {
      dispatch(fetchPartDataSuccess(data));

      if (!data.isExists) {
        dispatch(fetchPackageType());
        api.getPackageTypeGroup((data) => {
          dispatch(fetchPackageTypeSuccess(data));
        })
      }
    });
  }
}

function fetchPartDataSuccess(data) {
  return {
    type: FETCH_PART_DATA_SUCCESS,
    data
  }
}

function checkPartNumber() {
  return {
    type: FETCH_PART_DATA
  }
}

function fetchPackageType() {
  return {
    type: FETCH_PACKAGE_TYPE
  }
}

function fetchPackageTypeSuccess(data) {
  return {
    type: FETCH_PACKAGE_TYPE_SUCCESS,
    data
  }
}
