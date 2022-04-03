import { catchError, from, of, switchMap } from "rxjs";
import {
  getAllTasksFailure,
  getAllTasksSuccess,
} from "../actions/taskManagementActions";
import * as service from "../services/taskManagementServices";
import * as actionTypes from "../constant/ActionTypes";
import { ofType } from "redux-observable";

const getAllTasks = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_ALL_TASKS),
    switchMap(() =>
      from(service.getAllTasks()).pipe(
        switchMap((response) => of(getAllTasksSuccess(response))),
        catchError((error) => of(getAllTasksFailure(error)))
      )
    )
  );

export const taskManagementEpic = [getAllTasks];
