import * as actionType from "../constant/ActionTypes";

const accountInit = {
  username: "",
};

export default function accountReducer(state = accountInit, action) {
  switch (action.type) {
    case actionType.SOME_STUFF_HERE:
      return {
        ...state,
        // some stuff here
      };
    default:
      return state;
  }
}
