import * as actionTypes from "../constant/ActionTypes";


// {
  //     nameTask: "hello world",
  //     // id: "",
  //     start: new Date(),
  //     end: new Date(),
  //     status: "done",
  //     subTasks: [
  //       {
  //         title: "hello",
  //         id: "0",
  //         start: new Date(),
  //         end: new Date(),
  //         status: "failed",
  //       },
  //       {
  //         title: "world",
  //         id: "1",
  //         start: new Date(),
  //         end: new Date(),
  //         status: "failed",
  //       },
  //     ],
  //   },
const initState = {
  nameTask: "",
  id: "",
  start: null,
  end: null,
  subTasks: []
};

export default function createOrEditReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_TASK_BY_ID_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.CREATE_SUBTASK_SUCCESS:
      return {
        ...state,
        subTasks: [...state.subTask, action.payload],
        selectedSubTask: action.payload,
      };
    case actionTypes.SET_SELECTED_SUBTASK_SUCCESS:
      return {
        ...state,
        selectedSubTask: action.payload,
      };
    case actionTypes.UPDATE_TARGET_SUBTASK_SUCCESS:
      const newEventCalendar = [...state.subTasks];
      newEventCalendar[action.payload.id] = {
        ...action.payload,
      };

      return {
        ...state,
        subTask: newEventCalendar,
      };
    default: 
      return state;
  }
}
