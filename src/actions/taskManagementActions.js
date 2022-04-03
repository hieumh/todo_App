import * as actionTypes from "../constant/ActionTypes";

export const getAllTasks = () => ({
  type: actionTypes.GET_ALL_TASKS,
});
export const getAllTasksSuccess = (data) => ({
  type: actionTypes.GET_ALL_TASKS_SUCCESS,
  payload: data,
});
export const getAllTasksFailure = (error) => ({
  type: actionTypes.GET_ALL_TASKS_FAILURE,
  error,
});
