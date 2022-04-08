import {
  readData,
  updateData,
  addData,
  removeData,
} from "../database/readAndWriteDatabase";

export const addTask = (data) =>
  addData({ route: `/tasks`, data: data, key: "id" }).catch((err) => {
    throw err;
  });

export const getTaskById = (id) =>
  readData({ route: `/tasks/${id}` }).catch((error) => {
    throw error;
  });

export const updateTargetTask = (data) =>
  updateData({ route: `/tasks/${data.id}`, data: data }).catch((err) => {
    throw err;
  });

export const createSubTask = (id, data) =>
  addData({ route: `/tasks/${id}/subTasks/`, data, key: "subId" }).catch(
    (error) => {
      throw error;
    }
  );

export const updateTargetSubTask = (data) =>
  updateData({ route: `/tasks/${data.id}/subTasks/${data.subId}`, data }).catch(
    (err) => {
      throw err;
    }
  );

export const removeTargetSubTask = (data) =>
  removeData({ route: `/tasks/${data.id}/subTasks/${data.subId}` }).catch(
    (err) => {
      throw err;
    }
  );
