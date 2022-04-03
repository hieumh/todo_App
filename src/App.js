import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { getAllTasks } from "./actions/taskManagementActions";
import Dashboard from "./container/Dashboard";
import configureStore from "./store/store";

const store = configureStore();

function App() {
  useEffect(() => {
    console.log("init");
    store.dispatch(getAllTasks());
  }, []);

  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
