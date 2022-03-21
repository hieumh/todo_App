import * as actionType from "../constant/ActionTypes";

const tasksInit = {};

export default function tasksReducer(state = tasksInit, action) {
  switch (action.type) {
    case actionType.SOME_STUFF_HERE:
      return state;
    default:
      return state;
  }
}
