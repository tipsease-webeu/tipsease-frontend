import React from "react";
import "./App.css";
import { Route, withRouter, Redirect } from "react-router-dom";

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
import Profile from "./components/Profile";
import Registration from "./components/Registration"

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

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Registration} />
        <PrivateRoute path="/home" component={Container} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/service-worker/:id" component={WorkerCard} />
        {/* <Route path='/profile' component={Profile} /> */}
      </Provider>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authorization") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default withRouter(App);
