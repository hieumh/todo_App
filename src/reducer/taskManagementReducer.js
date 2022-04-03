import * as actionType from "../constant/ActionTypes";

const tasksInit = [];

// const tasks = [
//   {
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
// ];

export default function taskManagementReducer(state = tasksInit, action) {
  switch (action.type) {
    case actionType.GET_ALL_TASKS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}
