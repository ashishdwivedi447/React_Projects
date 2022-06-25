import * as types from "./actionTypes";
const incrementCounter = (payload) => {
  return {
    type: types.INCREMENT_COUNTER,
    payload,
  };
};

const decrementCounter = (payload) => {
  return {
    type: types.DECREMENT_COUNTER,
    payload,
  };
};
const getTodoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};
const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};
const getTodoFailure = (error) => {
  return { type: types.GET_TODO_FAILURE, payload: error };
};

export {
  incrementCounter,
  decrementCounter,
  getTodoSuccess,
  getTodoRequest,
  getTodoFailure,
};
