import reducer from "./reducer";
import {legacy_createStore as createStore} from "redux";

// const createStore = (reducer, initialState) => {
//   const store = {};

//   store.state = initialState;

//   store.getState = () => store.state;

//   store.dispatch = (action) => {
//     store.state = reducer(store.state, action);
//   };

//   return store;
// };

const store = createStore(reducer, { counter: 0, todos: [] });

export { store };
