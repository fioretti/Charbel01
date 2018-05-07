import { FETCHING_LIST, FETCHING_LIST_DONE, POPULATE_REQUESTS,
  CHANGE_STATUS, CHANGE_DATE_RANGE, RESUBMIT_REQUEST, DELETE_REQUEST,
  REVALIDATE_LIST, NEW_FORM_CREATED, TOGGLE_DETAIL, SET_USER_ADMIN,
  SET_ALLOW_CREATE, SET_ALLOW_MODIFY, SET_ALLOW_DELETE } from './ActionTypes'

import {toastr} from 'react-redux-toastr'
import * as api from 'Utils/Api'
import { debug } from 'util';

export function toggleDetail() {
  return {
    type: TOGGLE_DETAIL
  }
}

export function setUserAdmin() {
  return {
    type: SET_USER_ADMIN
  }
}

export function setAllowCreateRequest() {
  return {
    type: SET_ALLOW_CREATE
  }
}

export function setAllowModifyRequest() {
  return {
    type: SET_ALLOW_MODIFY
  }
}

export function setAllowDeleteRequest() {
  return {
    type: SET_ALLOW_DELETE
  }
}

function setFetchingStatus() {
  return {
    type: FETCHING_LIST
  }
}

function setFetchingDone() {
  return {
    type: FETCHING_LIST_DONE
  }
}

export function populateRequests(requests) {
  return {
    type: POPULATE_REQUESTS,
    requests
  }
}

export function fetchRequestsAndHandle(postData) {
  return (dispatch) => {
    dispatch(setFetchingStatus())

      api.queryGiftCerts(postData, (data) => {          
      dispatch(setFetchingDone())
      dispatch(populateRequests(data.data))
    })
  }
}

export function setStatus(status) {
  return {
    type: CHANGE_STATUS,
    status
  }
}

export function setDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    startDate: dateRange.startDate,
    endDate: dateRange.endDate
  }
}

export function resubmitRequestAndHandle(id, callback) {
  return (dispatch) => {
    api.resubmitRequest(id, (data) => {
      if(data.ok) {
        dispatch(reSubmitRequest({
          id: id,
          status: data.payload
        }))

        dispatch(revalidateList())
        callback()
      }
    })
  }
}

function reSubmitRequest(data) {
  return {
    type: RESUBMIT_REQUEST,
    id: data.id,
    status: data.status
  }
}

function revalidateList() {
  return {
    type: REVALIDATE_LIST
  }
}

export function deleteRequestAndHandle(id, callback) {
  return (dispatch) => {
    api.deleteRequest(id, (data) => {
      dispatch(deleteRequest(id))
      callback()
    })
  }
}

function deleteRequest(id) {
  return {
    type: DELETE_REQUEST,
    id
  }
}

export function createNewForm(data, callback) {
  return (dispatch, getState) => {
    const params = {
      id: data.id,
      keepTests: data.checked
    }

    api.createNewFormAndHandle(params, (data) => {
      if(data.ok) {
        dispatch(newFormCreated(data.payload))
        toastr.success('Request '+ data.payload.id +' has been created.')
        callback()
      }
    })
  }
}

function newFormCreated(data) {
  return {
    type: NEW_FORM_CREATED,
    data
  }
}
