import * as types from "./actionTypes";

// const initialCount = 0;

// export function countReducer(count = initialCount, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return count + 1;
//     case types.DECREMENT:
//       return count - 1;
//     default:
//       return count;
//   }
// }

const initialUser = {};

export function currentUserReducer(currentUser = initialUser, action) {
  switch (action.type) {
    case types.ADD_CURRENT_USER:
      return action.payload;
    default:
      return currentUser;
  }
}

const initialListServiceWorkers = [];

export function listServiceWorkersReducer(
  listServiceWorkers = initialListServiceWorkers,
  action
) {
  switch (action.type) {
    case types.ADD_SERVICE_WORKERS:
      return action.payload;
    case types.ADD_TIP:
      return listServiceWorkers.map(worker => {
        return worker.id !== action.payload.id ? worker : action.payload;
      });
    default:
      return listServiceWorkers;
  }
}
