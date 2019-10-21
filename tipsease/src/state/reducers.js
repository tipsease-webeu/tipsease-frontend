import * as types from "./actionTypes";

const initialCount = 0;

export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}
