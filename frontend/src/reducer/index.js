import { combineReducers } from "redux";

import accountReducer from "./accountReducer";
import taskManagementReducer from "./taskManagementReducer";
import createOrEditReducer from "./createOrEditTaskReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  tasks: taskManagementReducer,
  selectedTask: createOrEditReducer,
});

export default rootReducer;
