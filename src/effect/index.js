import { combineEpics } from "redux-observable";
// import { accountEpic } from "./accountEpic";
import { createOrEditTaskEpic } from "./createOrEditTaskEpic";
import { taskManagementEpic } from "./taskManagementEpic";

export const rootEpic = combineEpics(
  //   ...accountEpic,
  ...createOrEditTaskEpic,
  ...taskManagementEpic
);
