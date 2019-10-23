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
      alert(error.message);
    });
};

// export function tipServiceWorker(amount) {
//   return {

//   }
// }

export const addTip = serviceWorker => {
  return {
    type: types.ADD_TIP,
    payload: serviceWorker
  };
};

const fetchServiceWorker = id => dispatch => {
  withAuth()
    .get(`https://build-tipsease.herokuapp.com/serviceWorkers/${id}`)
    .then(res => {
      dispatch(addTip(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

const tipServiceWorkersApi =
  "https://build-tipsease.herokuapp.com/serviceWorkers/pay";

export const onSubmitTip = (amount, id, userName) => dispatch => {
  withAuth()
    .put(`${tipServiceWorkersApi}/${id}`, {
      payment: amount,
      senderUsername: userName
    })
    .then(res => {
      dispatch(fetchServiceWorker(id));
    })
    .catch(error => {
      alert(error.message);
    });
};

export const clearCurrentUser = currentUser => {
  return {
    type: types.CLEAR_CURRENT_USER,
    payload: currentUser
  };
};
export const editCurrentUser = currentUser => {
  return {
    type: types.EDIT_CURRENT_USER,
    payload: currentUser
  };
};

const userEndpoint = "https://build-tipsease.herokuapp.com/users";

export const fetchCurrentUser = id => dispatch => {
  withAuth()
    .get(`${userEndpoint}/${id}`)
    .then(res => {
      dispatch(editCurrentUser(res.data));
    })
    .catch(error => {
      alert(error.message);
    });
};

export const onEditProfile = (values, id) => dispatch => {
  withAuth()
    .put(`${userEndpoint}/${id}`, values)
    .then(res => {
      dispatch(fetchCurrentUser(id));
    })
    .catch(error => {
      alert(error.message);
    });
};

export const resetTipSuccess = () => {
  return {
    type: types.RESET_TIP_SUCCESS,
  };
};

export const setTaskSucceded = () => {
  return {
    type: types.TASK_COMPLETED,
  }
}

export const activateErrorLogin = () => {
  return {
    type: types.SET_LOGIN_ERROR,
  }
}

export const setError = errorMessage => {
  return {
    type: types.SET_ERROR,
    payload: errorMessage
  }
}

export const clearError = () => {
  return {
    type: types.RESET_ERROR,
  }
}
