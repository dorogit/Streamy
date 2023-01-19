import { SIGN_IN } from "./types"

export const SignIn = (response) => {
  return {
      type: SIGN_IN,
      payload: response
    }
}