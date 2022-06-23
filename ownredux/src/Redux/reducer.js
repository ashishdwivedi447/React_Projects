import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + payload };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};

export default reducer;
