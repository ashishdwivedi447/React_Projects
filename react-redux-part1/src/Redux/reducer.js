import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
} from "./actionTypes";
let initialState = {
  counter: 0,
  todos: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + payload };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - payload };
    case GET_TODO_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODO_SUCCESS:
      // payload itself is an object so we  have to spread it also along with the todos
      return { ...state, todos: [...state.todos, ...payload], isLoading: false };
    case GET_TODO_FAILURE:
      return { ...state, isLoading: false, isError: payload };
    default:
      return state;
  }
};

export default reducer;
