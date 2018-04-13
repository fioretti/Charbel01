import { POPULATE_DATA, INSERT_ITEM, UPDATE_ITEM } from './ActionTypes'
import { fromJS } from 'Immutable'

const initialState = fromJS({
  list: []
})

export default function (state = initialState, action) {
  switch(action.type) {
    case POPULATE_DATA:
      {
        return state.set('list', action.list)
      }
    case INSERT_ITEM:
      {              
        const list = state.get('list')
        return state.set('list', list.push(action.item))
      }
    case UPDATE_ITEM:
      {
        const list = state.get('list')
        const itemIdx = list.findIndex((item) => {
          return item.get('id') == action.item.get('id')
        })

        const newList = list.set(itemIdx, action.item);
        return state.set('list', newList)
      }
    default:
      {
        return state
      }
  }
}
