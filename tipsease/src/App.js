import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

// STATE MANAGEMENT

import * as reducers from "./state/reducers";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// COMPONENTS

import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Container from "./components/Container";
import WorkerCard from "./components/WorkerCard";

const masterReducer = combineReducers({
  count: reducers.countReducer,
  currentUser: reducers.currentUserReducer,
  listServiceWorkers: reducers.listServiceWorkersReducer
});

const store = createStore(
  masterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Container} />
        <Route path="/service-worker/:id" component={WorkerCard} />
        {/* <Route path='/profile' component={Profile} /> */}
      </Provider>
    </div>
  );
}

export default App;
