import * as actionTypes from "../constant/ActionTypes";

export const setUser = (data) => ({
  type: actionTypes.SET_USER,
  payload: data,
});

export const setUserSuccess = (data) => ({
  type: actionTypes.SET_USER_SUCCESS,
  payload: data,
});
