import { catchError, from, of, switchMap } from "rxjs";
import {
  getAllTasksFailure,
  getAllTasksSuccess,
  removeTargetTaskFailure,
  removeTargetTaskSuccess,
} from "../actions/taskManagementActions";
import * as service from "../services/taskManagementServices";
import * as actionTypes from "../constant/ActionTypes";
import { ofType } from "redux-observable";
import { toast } from "react-toastify";

const getAllTasksEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_ALL_TASKS),
    switchMap(() =>
      from(service.getAllTasks()).pipe(
        switchMap((response) => of(getAllTasksSuccess(response))),
        catchError((error) => of(getAllTasksFailure(error)))
      )
    )
  );

const removeTargetTaskEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.REMOVE_TARGET_TASK),
    switchMap((action) =>
      from(service.removeTargetTask(action.payload.id)).pipe(
        switchMap(() => {
          toast.success("Remove target task success");
          return of(removeTargetTaskSuccess(action.payload.id));
        }),
        catchError((err) => {
          toast.error("Remove target task error");
          return of(removeTargetTaskFailure(err));
        })
      )
    )
  );

export const taskManagementEpic = [getAllTasksEpic, removeTargetTaskEpic];
