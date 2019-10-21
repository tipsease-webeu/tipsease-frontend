import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

// STATE MANAGEMENT

import * as reducers from "./state/reducers";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

// COMPONENTS

import Counter from "./components/Counter";

const masterReducer = combineReducers({
  count: reducers.countReducer
});

const store = createStore(masterReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <NavBar />
        <Route path="/home" component={Container} />
        <Route path="/" component={Login} />
        <Route path='/profile' component={Profile} />
      </Provider>
    </div>
  );
}

export default App;
