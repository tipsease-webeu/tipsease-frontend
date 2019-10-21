import * as types from "./actionTypes";
import withAuth from "../axios";

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function getCurrentUser(currentUser) {
  return {
    type: types.ADD_CURRENT_USER,
    payload: currentUser
  };
}

export function getServiceWorkers(data) {
  return {
    type: types.ADD_SERVICE_WORKERS,
    payload: data
  };
}

const fetchServiceWorkersApi =
  "https://build-tipsease.herokuapp.com/serviceWorkers";

export const fetchServiceWorkers = () => dispatch => {
  withAuth()
    .get(fetchServiceWorkersApi)
    .then(res => {
      dispatch(getServiceWorkers(res.data));
    })
    .catch(error => {
      debugger;
    });
};
