import { legacy_createStore } from "redux";
import { reducer } from "./reducer";


export const store=legacy_createStore(reducer)

// another way to pass the initial state (this way has more priority)
// let initialState={
//     counter:100,
// }
// export const store=legacy_createStore(reducer,initialState)
