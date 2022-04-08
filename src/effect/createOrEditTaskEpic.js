import { ofType } from "redux-observable";
import { catchError, from, of, switchMap } from "rxjs";
import {
  getTaskByIdFailure,
  getTaskByIdSuccess,
  createSubTaskFailure,
  createSubTaskSuccess,
  setSelectedSubTaskSuccess,
  setSelectedSubTaskFailure,
  updateTargetSubTaskSuccess,
  updateTargetSubTaskFailure,
  resetSelectedTaskSuccess,
  updateTargetTaskSuccess,
  updateTargetTaskFailure,
  getTaskById,
  removeTargetSubTaskSuccess,
  addTaskFailure,
  addTaskSuccess,
} from "../actions/createOrEditTaskActions";
import * as actionTypes from "../constant/ActionTypes";
import * as service from "../services/createOrEditTaskServices";
import { toast } from "react-toastify";
import { getAllTasks } from "../actions/taskManagementActions";

const addTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.ADD_TASK),
    switchMap((action) =>
      from(service.addTask(action.payload)).pipe(
        switchMap((data) => {
          toast.success("Add successful");
          return of(addTaskSuccess(data), getAllTasks());
        }),
        catchError((error) => {
          toast.error("Add failure");
          return of(addTaskFailure(error));
        })
      )
    )
  );

const getTaskByIdEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_TASK_BY_ID),
    switchMap((action) =>
      from(service.getTaskById(action.payload)).pipe(
        switchMap((response) => of(getTaskByIdSuccess(response))),
        catchError((error) => of(getTaskByIdFailure(error)))
      )
    )
  );

const resetSelectedTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.RESET_SELECTED_TASK),
    switchMap(() => of(resetSelectedTaskSuccess()))
  );

const updateTargetTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.UPDATE_TARGET_TASK),
    switchMap((action) =>
      from(service.updateTargetTask(action.payload)).pipe(
        switchMap(() => {
          toast.success("Update success");
          return of(updateTargetTaskSuccess(action.payload), getAllTasks());
        }),
        catchError((error) => {
          toast.error("Update failed");
          return of(updateTargetTaskFailure(error));
        })
      )
    )
  );

const createSubTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.CREATE_SUBTASK),
    switchMap((action) =>
      from(service.createSubTask(action.payload.id, action.payload.data)).pipe(
        switchMap((data) => {
          toast.success("Update subtask success");
          return of(createSubTaskSuccess(data), getTaskById(data.id));
        }),
        catchError((error) => {
          toast.error("Update subtask failed");
          return of(createSubTaskFailure(error));
        })
      )
    )
  );

const setSelectedSubTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.SET_SELECTED_SUBTASK),
    switchMap((action) => of(setSelectedSubTaskSuccess(action.payload))),
    catchError((error) => of(setSelectedSubTaskFailure(error)))
  );

const updateTargetSubTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.UPDATE_TARGET_SUBTASK),
    switchMap((action) =>
      from(service.updateTargetSubTask(action.payload)).pipe(
        switchMap(() => {
          toast.success("Update success");
          return of(
            updateTargetSubTaskSuccess(action.payload),
            getTaskById(action.payload.id)
          );
        }),
        catchError((error) => {
          toast.error("Update failed");
          return of(updateTargetSubTaskFailure(error));
        })
      )
    )
  );

const removeTargetSubTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.REMOVE_TARGET_SUBTASK),
    switchMap((action) =>
      from(service.removeTargetSubTask(action.payload)).pipe(
        switchMap(() => {
          toast.success("Remove success");
          return of(
            removeTargetSubTaskSuccess(),
            getTaskById(action.payload.id)
          );
        }),
        catchError((error) => {
          toast.error("Remove error");
          throw error;
        })
      )
    )
  );

export const createOrEditTaskEpic = [
  addTaskEpic,
  getTaskByIdEpic,
  resetSelectedTaskEpic,
  createSubTaskEpic,
  setSelectedSubTaskEpic,
  updateTargetSubTaskEpic,
  updateTargetTaskEpic,
  removeTargetSubTaskEpic,
];
