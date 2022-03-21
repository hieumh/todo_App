import React from "react";
import { Provider } from "react-redux";
import Dashboard from "./container/Dashboard";
import configureStore from "./store/store";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
