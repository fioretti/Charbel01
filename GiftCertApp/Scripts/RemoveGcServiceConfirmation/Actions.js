import { OPEN_MODAL, CLOSE_MODAL } from './ActionTypes'

import * as giftCertFormAction from 'GiftCertForm/Actions'

export function openModal(device) {
  return {
    type: OPEN_MODAL,
    device
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function removeDevice(device) {
  return (dispatch) => {
    dispatch(testRequestFormAction.removeDevice(device))
    dispatch(closeModal())
  }
}
