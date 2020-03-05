import React from "react";
import { Provider } from "react-redux";
import store from "./store/CreateStore";
import Todo from "./component/Todo";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
