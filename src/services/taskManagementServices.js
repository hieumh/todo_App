import { readData, removeData } from "../database/readAndWriteDatabase";

export const getAllTasks = () =>
  readData({ route: "tasks" }).catch((error) => {
    throw error;
  });

export const removeTargetTask = (id) =>
  removeData({ route: `/tasks/${id}` }).catch((error) => {
    throw error;
  });
