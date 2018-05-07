import { fromJS } from 'Immutable'
import { OPEN_MODAL, CLOSE_MODAL } from './ActionTypes'

const initialState =  fromJS({
  isOpen: false,
  device: {}
})

export default function ( state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return initialState.merge({
        isOpen: true,
        device: action.device
      })
    case CLOSE_MODAL:
      return initialState
    default:
      return state
  }
}
