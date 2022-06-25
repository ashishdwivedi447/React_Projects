import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
} from "./actionTypes";
let initialState = {
  counter: 0,
  data: { todos: [], isLoading: false, isError: false },
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + payload };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - payload };
    case GET_TODO_REQUEST:
      return { ...state, data: { ...state.data, isLoading: true } };
    case GET_TODO_SUCCESS:
      // payload itself is an object so we  have to spread it also along with the todos
      return {
        ...state,
        data: {
          ...state.data,
          todos: payload,
          isLoading: false,
          isError: false,
        },
      };
    case GET_TODO_FAILURE:
      return {
        ...state,
        data: { ...state.data, isLoading: false, isError: payload },
      };

    case ADD_TODO_REQUEST:
      return { ...state, data: { ...state.data, isLoading: true ,isError:false} };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          isLoading: false,
        },
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        data: { ...state.data, isLoading: false, isError: payload },
      };
    default:
      return state;
  }
};

export default reducer;
