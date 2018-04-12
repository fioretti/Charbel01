import { POPULATE_DATA, INSERT_ITEM, UPDATE_ITEM } from './ActionTypes'
import * as api from 'Utils/Api'
import { toastr } from 'react-redux-toastr'

export function populateData(list) {
  return {
    type: POPULATE_DATA,
    list
  }
}

export function insertNewItemAndHandle(item, callback) {    
  return (dispatch) => {
      api.addNewServiceType(item.toJS(), (data) => {      
          data.ok = data.status == 201 ? true : false;
          data.payload = data.data;
          debugger;
          if(data.ok) {
            const newItem = item.set('id', data.payload.id)
            dispatch(addNewItem(newItem))
          } else {
            toastr.error("Failed to save changes. Please try again.")
          }

          callback(data.ok)
    })
  }
}

function addNewItem(item) {
  return {
    type: INSERT_ITEM,
    item
  }
}

export function modifyItemAndHandle(item, callback) {
  return (dispatch) => {
    api.updateDeviceType(item.toJS(), (data) => {
      if(data.ok) {
        dispatch(modifyItem(item))
      } else {
        toastr.error("Failed to save changes. Please try again.")
      }

      callback(data.ok)
    })
  }
}

function modifyItem(item) {
  return {
    type: UPDATE_ITEM,
    item
  }
}
