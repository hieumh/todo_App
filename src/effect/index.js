import { combineEpics } from "redux-observable";
import accountEpic from "./accountEpic";
import einsMatrixEpic from "./einsMatrixEpic";

const rootEpic = combineEpics(accountEpic, einsMatrixEpic);
export default rootEpic;
