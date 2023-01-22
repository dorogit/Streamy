import streams from "../apis/streams"
import { SIGN_IN } from "./types"

export const SignIn = (response) => {
  return {
      type: SIGN_IN,
      payload: response
    }
}

export const createStream = (formValues) => {
  return async (dispatch) => {
    streams.post('/streams',formValues)
  }
}