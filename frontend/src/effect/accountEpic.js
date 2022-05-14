import { ofType } from "redux-observable";
import * as actionTypes from "../constant/ActionTypes";
import { of, switchMap } from "rxjs";
import { setUserSuccess } from "../actions/accountActions";

const setUserEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.SET_USER),
    switchMap((action) => of(setUserSuccess(action.payload)))
  );

export const accountEpic = [setUserEpic];
