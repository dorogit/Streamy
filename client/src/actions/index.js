import streams from "../apis/streams"
import { SIGN_IN, CREATE_STREAM,FETCH_STREAM,FETCH_STREAMS,DELETE_STREAM,EDIT_STREAM } from "./types"
import history from "../history"

export const SignIn = (response) => {
  return {
      type: SIGN_IN,
      payload: response
    }
}

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().currentUser
    const response = await streams.post('/streams',{...formValues,userId})
    dispatch({type:CREATE_STREAM , payload:response.data})
    history.push('/')
  }
}

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
    dispatch({ type:FETCH_STREAMS, payload:response.data })
  }
}

export const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type:FETCH_STREAM, payload:response.data })
  }
}

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type:EDIT_STREAM, payload:response.data })
    history.push('/')
  }
}

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type:DELETE_STREAM, payload:id})
    history.push('/')
  }
}
