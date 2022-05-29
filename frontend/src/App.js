import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { getAllTasks } from "./actions/taskManagementActions";
import Dashboard from "./container/Dashboard";
import configureStore from "./store/store";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./constant/FirebaseConfig";
import FirebaseAuthChecker from "./container/FirebaseAuthChecker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);

function App() {
  useEffect(() => {
    store.dispatch(getAllTasks());
  }, []);

  return (
    <>
      <Provider store={store}>
        <FirebaseAuthChecker>
          <Dashboard />
        </FirebaseAuthChecker>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
