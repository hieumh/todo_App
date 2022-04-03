import * as actionTypes from "../constant/ActionTypes";

export const getTaskById = (id) => ({
  type: actionTypes.GET_TASK_BY_ID,
  payload: id,
});

export const getTaskByIdSuccess = (id) => ({
  type: actionTypes.GET_TASK_BY_ID_SUCCESS,
  payload: id,
});

export const getTaskByIdFailure = (error) => ({
  type: actionTypes.GET_TASK_BY_ID_FAILURE,
  error,
});

export const createSubTask = (data) => ({
  type: actionTypes.CREATE_SUBTASK,
  payload: data,
});

export const createSubTaskSuccess = (data) => ({
  type: actionTypes.CREATE_SUBTASK_SUCCESS,
  payload: data,
});

export const createSubTaskFailure = (error) => ({
  type: actionTypes.CREATE_SUBTASK_FAILURE,
  error: error,
});

export const setSelectedSubTask = (data) => ({
  type: actionTypes.SET_SELECTED_SUBTASK,
  payload: data,
});

export const setSelectedSubTaskSuccess = (data) => ({
  type: actionTypes.SET_SELECTED_SUBTASK_SUCCESS,
  payload: data,
});

export const setSelectedSubTaskFailure = (error) => ({
  type: actionTypes.SET_SELECTED_SUBTASK_FAILURE,
  error: error,
});

export const updateTargetSubTask = (data) => ({
  type: actionTypes.UPDATE_SELECTED_SUBTASK,
  payload: data,
});

export const updateTargetSubTaskSuccess = (data) => ({
  type: actionTypes.UPDATE_SELECTED_SUBTASK_SUCCESS,
  payload: data,
});

export const updateTargetSubTaskFailure = (error) => ({
  type: actionTypes.UPDATE_SELECTED_SUBTASK_FAILURE,
  error,
});
