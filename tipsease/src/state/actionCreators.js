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

// export function tipServiceWorker(amount) {
//   return {

//   }
// }

export const addTip = serviceWorker => {
  debugger
  return {
    type: types.ADD_TIP,
    payload: serviceWorker
  }

}

const fetchServiceWorker = id => dispatch => {
  withAuth().get(`https://build-tipsease.herokuapp.com/serviceWorkers/${id}`)
  .then(res => {
    debugger
    dispatch(addTip(res.data))
  })
  .catch(res => {
    debugger
  })
}

const tipServiceWorkersApi =
  "https://build-tipsease.herokuapp.com/serviceWorkers/pay";

export const onSubmitTip = (values, id, userName) => dispatch => {
  withAuth()
    .put(`${tipServiceWorkersApi}/${id}`, {
      payment: values.amount,
      senderUsername: userName
    })
    .then(res => {
      debugger;
      dispatch(fetchServiceWorker(id))
    })
    .catch(error => {
      debugger;
    });
};
