import * as types from "./actionTypes";

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
    payload: currentUser,
  }
}
