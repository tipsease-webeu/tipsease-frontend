import * as types from "./actionTypes";

const initialCount = 0;

export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    default:
      return count;
  }
}

const initialUser = {};

export function currentUserReducer(currentUser = initialUser, action) {
  switch (action.type) {
    case types.ADD_CURRENT_USER:
      return action.payload;
    case types.CLEAR_CURRENT_USER:
      return {};
    case types.EDIT_CURRENT_USER:
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
    case types.ADD_RATING:
      return listServiceWorkers.map(worker => {
        return worker.id !== action.payload.id ? worker : action.payload;
      });
    case types.SORT_WORKERS:
      return action.payload;
    default:
      return listServiceWorkers;
  }
}

const initialTipSuccess = false;

export function tipSuccessReducer(tipSuccess = initialTipSuccess, action) {
  switch (action.type) {
    case types.ADD_TIP:
      return true;
    case types.RESET_TIP_SUCCESS:
      return false;
    case types.TASK_COMPLETED:
      return true;
    default:
      return tipSuccess;
  }
}

const initialLoginError = false;

export function loginErrorReducer(loginError = initialLoginError, action) {
  switch (action.type) {
    case types.SET_LOGIN_ERROR:
      return true;
    case types.CLEAR_LOGIN_ERROR:
      return false;
    default:
      return loginError;
  }
}

const initialError = [false, ""];

export function errorReducer(error = initialError, action) {
  switch (action.type) {
    case types.SET_ERROR:
      return [true, action.payload];
    case types.RESET_ERROR:
      return [false, ""];
    default:
      return error;
  }
}

const initialSorted = false;

export function sortReducer(sorted = initialSorted, action) {
  switch(action.type) {
    case types.SORT_WORKERS:
      return !sorted;
    default:
      return sorted;
  }
}
