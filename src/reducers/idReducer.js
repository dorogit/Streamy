import { SIGN_IN } from "../actions/types"

const INITIAL_STATE = {
  userId: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN: return { ...state, userId:action.payload.sub }
    default: return state
  }
}