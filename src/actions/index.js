import { SIGN_IN } from "./types"

export const SignIn = (decodedToken) => {
  return {
      type: SIGN_IN,
      payload: decodedToken
    }
}