import { statusList } from 'Utils/GiftCertStatusEnum'
import { fromJS } from 'Immutable'

import { FETCHING_LIST, FETCHING_LIST_DONE, POPULATE_REQUESTS,
  CHANGE_STATUS, CHANGE_DATE_RANGE, RESUBMIT_REQUEST, DELETE_REQUEST ,
  REVALIDATE_LIST, NEW_FORM_CREATED, TOGGLE_DETAIL, SET_USER_ADMIN,
  SET_ALLOW_CREATE, SET_ALLOW_MODIFY, SET_ALLOW_DELETE } from './ActionTypes'
import { debug } from 'util';

const initialState = fromJS({
  isUserAdmin: false,
  allowCreate: false,
  allowModify: false,
  allowDelete: false,
  toggleDetail: false,
  status: statusList
      .filter((item) => item.name !== 'Closed')
      .map((item) => item.id),
  startDate: {},
  endDate: {},
  isSearching: false,
  result: []
})

export default function (state = initialState, action) {
  switch(action.type) {
    case TOGGLE_DETAIL:
      {
        return state.set('toggleDetail', !state.get('toggleDetail'))
      }
    case SET_USER_ADMIN :
      {
        return state.set('isUserAdmin', true)
      }
    case SET_ALLOW_CREATE :
      {
        return state.set('allowCreate', true)
      }
    case SET_ALLOW_MODIFY :
      {
        return state.set('allowModify', true)
      }
    case SET_ALLOW_DELETE:
      {
        return state.set('allowDelete', true)
      }
    case CHANGE_STATUS:
      {
        if (action.status == null) {
          return state.merge({
            status: []
          })
        }

        let status = [];
        action.status.forEach((item) => {
          status.push(parseInt(item))
        })

        return state.merge({
          status: status
        })
      }
    case CHANGE_DATE_RANGE:
      {
        return state.merge({
          startDate: action.startDate,
          endDate: action.endDate
        })
      }
    case FETCHING_LIST:
      {
        return state.merge({
          isSearching: true
        })
      }
    case FETCHING_LIST_DONE:
      {
        return state.merge({
          isSearching: false
        })
      }
    case POPULATE_REQUESTS:
          {              
        return state.merge({
          result: fromJS(action.requests)
        })
      }
    case RESUBMIT_REQUEST:
      {
        const result = state.get('result')

        const idx = result.findIndex((item) => {
          return item.get('id') === action.id
        })

        const testRequest = result.get(idx)
        const newTestRequest = testRequest.set('status', action.status);

        return state.merge({
          result: result.set(idx, newTestRequest)
        })
      }
    case REVALIDATE_LIST:
      {
        const result = state.get('result');
        const statuses = state.get('status');

        return state.merge({
          result: result.filter((item) => {
            const status = item.get('status');
            return statuses.indexOf(status) >= 0
          })
        })
      }
    case NEW_FORM_CREATED:
      {
        return state.merge({
          result: result.push(fromJS(action.data))
        })
      }
    case DELETE_REQUEST:
      {
        const result = state.get('result')

        return state.merge({
          result: result.filter((item) => {
            return item.get('id') !== action.id
          })
        })
      }
    default:
      {
        return state;
      }
  }
}
