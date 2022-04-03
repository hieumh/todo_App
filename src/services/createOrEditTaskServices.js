import axiosAuthed from "../constant/AxiosConfig";

export const getTaskById = (id) =>
  axiosAuthed
    .get(`/task/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const createSubTask = (id, subId, data) =>
  axiosAuthed
    .post(`/task/${id}/sub-task/${subId}`, { ...data })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

export const updateTargetSubTask = (data) =>
  axiosAuthed
    .put(`/task/${data.id}/sub-task/${data.subId}`, { data })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
