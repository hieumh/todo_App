import * as actionType from "../constant/ActionTypes";
import { obj2ArrayShallow } from "../utils/utils";
import moment from "moment";

const tasksInit = [];

export default function taskManagementReducer(state = tasksInit, action) {
  switch (action.type) {
    case actionType.GET_ALL_TASKS_SUCCESS:
      const allTasks = obj2ArrayShallow(action.payload).map((task) => ({
        ...task,
        subTasks: obj2ArrayShallow(task.subTasks),
      }));
      return allTasks.map(task => ({
        ...task,
        start: new Date(task.start),
        end: new Date(task.end),
        subTasks: task.subTasks.map(subTask => ({
          ...subTask,
          start: new Date(subTask.start),
          end: new Date(subTask.end)
        }))
      }))
    case actionType.REMOVE_TARGET_TASK_SUCCESS:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}
