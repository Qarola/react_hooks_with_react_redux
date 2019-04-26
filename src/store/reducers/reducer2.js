import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  stateprop2: 0
}

const Reducer2 = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.REDUX_INC:
        return {
          ...state,
          stateprop2: state.stateprop2 + 1
        }
      case ACTION_TYPES.REDUX_DEC:
        return {
          ...state,
          stateprop2: state.stateprop2 - 1
        }
      default:
        return state
    }
}

export default Reducer2;
