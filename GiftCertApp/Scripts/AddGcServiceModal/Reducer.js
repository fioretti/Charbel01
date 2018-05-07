import { fromJS } from 'Immutable'
import { OPEN_MODAL, CLOSE_MODAL, FETCH_PACKAGE_TYPE, FETCH_PART_DATA,
  FORM_DATA_CHANGES, FETCH_PART_DATA_SUCCESS, FETCH_PACKAGE_TYPE_SUCCESS,
  RESET_ERRORS_STATE, SHOW_ERROR  } from './ActionTypes'

const initialState =  fromJS({
  search: '',
  showEditor: false,
  device: {
    partNumber: '',
    packageTypeGroup: {
      id: 0
    },
    packageType: {
      id: 0
    }
  },
  isPartFound: false,
  packageTypeGroupsData: [],
  isOpen: false,
  isSearching: false,
  isFetchingPackageType: false,
  showError: false,
  errorMessage: ''
})

export default function ( state = initialState, action) {
  switch(action.type) {
    case RESET_ERRORS_STATE:
      return state.set('showError', false)
    case SHOW_ERROR:
      return state.merge({
        showError: true,
        errorMessage: action.message
      })
    case OPEN_MODAL:
      return initialState.set('isOpen', true)
    case CLOSE_MODAL:
      return initialState
    case FETCH_PART_DATA:
      return state.set('isSearching', true)
    case FETCH_PACKAGE_TYPE:
      return state.set('isFetchingPackageType', true)
    case FETCH_PACKAGE_TYPE_SUCCESS:
      return state.merge({
        isFetchingPackageType:false,
        packageTypeGroupsData: action.data
      })
    case FORM_DATA_CHANGES:
      return state.merge(action.changes);
    case FETCH_PART_DATA_SUCCESS:
      let newState = state.merge({
        isSearching: false,
        showEditor: true,
        isPartFound: action.data.isExists,
      });

      if (action.data.isExists) {
        var device = action.data.result;
        newState = newState.merge({
          device: device
        })
      } else {
        const defaultDevice = initialState.get('device')
          .set('partNumber', state.get('search'));

        newState = newState.merge({
          device: defaultDevice
        })
      }

      return newState
    default:
      return state
  }
}
