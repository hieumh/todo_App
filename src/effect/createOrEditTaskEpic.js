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
} from "../actions/createOrEditTaskActions";
import * as actionTypes from "../constant/ActionTypes";
import * as service from "../services/createOrEditTaskServices";

const getTaskById = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_TASK_BY_ID),
    switchMap((action) =>
      from(service.getTaskById(action.payload)).pipe(
        switchMap((response) => of(getTaskByIdSuccess(response))),
        catchError((error) => of(getTaskByIdFailure(error)))
      )
    )
  );

const createSubTask = (action$) =>
  action$.pipe(
    ofType(actionTypes.CREATE_SUBTASK),
    switchMap((action) =>
      from(
        service.createSubTask(
          action.payload.id,
          action.payload.subId,
          action.payload.data
        )
      ).pipe(
        switchMap((response) => of(createSubTaskSuccess(response))),
        catchError((error) => of(createSubTaskFailure(error)))
      )
    )
  );

const setSelectedSubTask = (action$) =>
  action$.pipe(
    ofType(actionTypes.SET_SELECTED_SUBTASK),
    switchMap((action) => of(setSelectedSubTaskSuccess(action.payload))),
    catchError((error) => of(setSelectedSubTaskFailure(error)))
  );

const updateTargetSubTask = (action$) =>
  action$.pipe(
    ofType(actionTypes.UPDATE_TARGET_SUBTASK),
    switchMap((action) =>
      from(service.updateTargetSubTask(action.payload)).pipe(
        switchMap((response) => of(updateTargetSubTaskSuccess(response))),
        catchError((error) => of(updateTargetSubTaskFailure(error)))
      )
    )
  );

export const createOrEditTaskEpic = [
  getTaskById,
  createSubTask,
  setSelectedSubTask,
  updateTargetSubTask,
];
