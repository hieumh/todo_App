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

export const removeTargetTask = (data) => ({
  type: actionTypes.REMOVE_TARGET_TASK,
  payload: data,
});

export const removeTargetTaskSuccess = (id) => ({
  type: actionTypes.REMOVE_TARGET_TASK_SUCCESS,
  payload: id
});

export const removeTargetTaskFailure = (error) => ({
  type: actionTypes.REMOVE_TARGET_TASK_FAILURE,
  error: error,
});
