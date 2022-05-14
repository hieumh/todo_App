import * as actionType from "../constant/ActionTypes";

const accountInit = {
  username: "",
};

export default function accountReducer(state = accountInit, action) {
  switch (action.type) {
    case actionType.SET_USER_SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
