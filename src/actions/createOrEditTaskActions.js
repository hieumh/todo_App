import * as actionTypes from "../constant/ActionTypes";

export const addTask = (data) => ({
  type: actionTypes.ADD_TASK,
  payload: data,
});

export const addTaskSuccess = (data) => ({
  type: actionTypes.ADD_TASK_SUCCESS,
  payload: data,
});

export const addTaskFailure = (data) => ({
  type: actionTypes.ADD_TASK_FAILURE,
  payload: data,
});

export const resetSelectedTask = () => ({
  type: actionTypes.RESET_SELECTED_TASK,
});

export const resetSelectedTaskSuccess = () => ({
  type: actionTypes.RESET_SELECTED_TASK_SUCCESS,
});

export const updateTargetTask = (data) => ({
  type: actionTypes.UPDATE_TARGET_TASK,
  payload: data,
});

export const updateTargetTaskSuccess = (data) => ({
  type: actionTypes.UPDATE_TARGET_TASK_SUCCESS,
  payload: data,
});

export const updateTargetTaskFailure = (error) => ({
  type: actionTypes.UPDATE_TARGET_TASK_FAILURE,
  error,
});

export const getTaskById = (id) => ({
  type: actionTypes.GET_TASK_BY_ID,
  payload: id,
});

export const getTaskByIdSuccess = (data) => ({
  type: actionTypes.GET_TASK_BY_ID_SUCCESS,
  payload: data,
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
  type: actionTypes.UPDATE_TARGET_SUBTASK,
  payload: data,
});

export const updateTargetSubTaskSuccess = (data) => ({
  type: actionTypes.UPDATE_TARGET_SUBTASK_SUCCESS,
  payload: data,
});

export const updateTargetSubTaskFailure = (error) => ({
  type: actionTypes.UPDATE_TARGET_SUBTASK_FAILURE,
  error,
});

export const removeTargetSubTask = (data) => ({
  type: actionTypes.REMOVE_TARGET_SUBTASK,
  payload: data,
});

export const removeTargetSubTaskSuccess = () => ({
  type: actionTypes.REMOVE_TARGET_SUBTASK_SUCCESS,
});

export const removeTargetSubTaskFailure = (error) => ({
  type: actionTypes.REMOVE_TARGET_SUBTASK_FAILURE,
  error: error,
});
