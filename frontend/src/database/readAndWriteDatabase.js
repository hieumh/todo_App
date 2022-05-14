import {
  child,
  get,
  getDatabase,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";

export async function removeData({ route }) {
  try {
    const db = getDatabase();
    await remove(ref(db, route));
  } catch (error) {
    throw error;
  }
}

export async function updateData({ data, route }) {
  try {
    const db = getDatabase();
    await set(ref(db, route), data);
  } catch (error) {
    throw error;
  }
}

export async function readData({ route }) {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, route));
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return "";
  } catch (error) {
    throw error;
  }
}

export async function addData({ route, data, key }) {
  try {
    const db = getDatabase();

    const newPostKey = push(child(ref(db), route)).key;
    const updateData = {};
    updateData[route + "/" + newPostKey] = {
      ...data,
      [key]: newPostKey,
    };

    update(ref(db), updateData);
    return {
      ...data,
      [key]: newPostKey,
    };
  } catch (error) {
    throw error;
  }
}
