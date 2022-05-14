import * as actionTypes from "../constant/ActionTypes";
import { obj2ArrayShallow } from "../utils/utils";

const initState = {
  nameTask: "",
  id: "",
  start: null,
  end: null,
  subTasks: [],
};

export default function createOrEditReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.GET_TASK_BY_ID_SUCCESS:
      const subTasks = obj2ArrayShallow(action.payload.subTasks);
      return {
        ...state,
        ...action.payload,
        subTasks: subTasks.map((subTask) => ({
          ...subTask,
          start: new Date(subTask.start),
          end: new Date(subTask.end),
        })),
      };
    case actionTypes.RESET_SELECTED_TASK_SUCCESS:
      return {};
    case actionTypes.UPDATE_TARGET_TASK_SUCCESS:
      return {
        ...action.payload,
      };
    case actionTypes.CREATE_SUBTASK_SUCCESS:
      const targetSubTask = {
        ...action.payload,
        start: new Date(action.payload.start),
        end: new Date(action.payload.end),
      };
      return {
        ...state,
        subTasks: [...state.subTasks, targetSubTask],
        selectedSubTask: targetSubTask,
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
        start: new Date(action.payload.start),
        end: new Date(action.payload.end),
      };

      return {
        ...state,
        subTasks: newEventCalendar,
      };
    case actionTypes.REMOVE_TARGET_SUBTASK_SUCCESS:
      return {
        ...state,
        subTasks: state.subTasks.filter(
          (item) => item.subId !== action.payload.subId
        ),
      };
    case actionTypes.CREATE_STEP_SUBTASK_SUCCESS:
      return {
        ...state,
        subTasks: [

        ]
      }
    default:
      return state;
  }
}
