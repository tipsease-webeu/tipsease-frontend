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

const editCurrentUser = () => {
  return {
    action: types.EDIT_CURRENT_USER,
  }
}

export const clearCurrentUser = () => {
  return {
    type: types.CLEAR_CURRENT_USER
  };
};

const userEndpoint = "https://build-tipsease.herokuapp.com/users";

export const onEditProfile = (values, id) => dispatch => {
  debugger;
  withAuth()
    .put(`${userEndpoint}/${id}`, values)
    .then(res => {
      debugger;
    })
    .catch(error => {
      debugger;
    });
};
