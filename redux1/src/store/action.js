import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./action.types";

export const Sub=(value)=>({type:COUNTER_DECREMENT,payload:value})
export const Add=(value)=>({type:COUNTER_INCREMENT,payload:value})