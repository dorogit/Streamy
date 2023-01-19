import { SIGN_IN } from "../actions/types"
import jwtDecode from 'jwt-decode';

const INITIAL_STATE = {
  userId: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN: const decodedToken = jwtDecode(action.payload.credential)
    return (
      {...state, userId: decodedToken.sub }
    )
    default: return state
  }
}