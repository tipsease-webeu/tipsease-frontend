import React from "react";
import "./App.css";
import { Route, withRouter, Redirect } from "react-router-dom";
import styled from "styled-components";

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
import Registration from "./components/Registration";
import MarketingPage from './components/MarketingPage';

const masterReducer = combineReducers({
  count: reducers.countReducer,
  currentUser: reducers.currentUserReducer,
  listServiceWorkers: reducers.listServiceWorkersReducer,
  tipSuccess: reducers.tipSuccessReducer,
  loginError: reducers.loginErrorReducer,
  error: reducers.errorReducer,
});

const store = createStore(
  masterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  .navbar {
    width: 25vw;
  }
  .content {
    width: 75vw;
  }
`;

function App(props) {
  return (
    <StyledApp className="App">
      <Provider store={store}>
        <section className="navbar">
          <NavBar />
        </section>
        <section className="content">
          <PrivateRoute exact path="/home" component={Container} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/service-worker/:id" component={WorkerCard} />
          <Route exact path='/' component={MarketingPage} />
        </section>
      </Provider>
    </StyledApp>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authorization") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default withRouter(App);
