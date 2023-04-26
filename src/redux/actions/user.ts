import * as types from '../constants'


export const fetchUsers = () => {
  return { 
    type: types.FETCH_USERS,
  }
}

// TODO: cleanup any!!!!!!!!!
export const fetchUsersSuccess = (data: any) => {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: data
  }
}

export const fetchUsersFailure = (errors: any) => {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: errors
  }
}