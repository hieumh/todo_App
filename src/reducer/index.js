import { combineReducers } from "redux";

import accountReducer from "./accountReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  account: accountReducer,
  tasks: tasksReducer,
});

export default rootReducer;
