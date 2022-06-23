import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./action.types"

// one way to pass the initialstate
let initialState={
    count:0,
}

// export const reducer=(state=initialState, action)=>{
//     console.log(state,action)
//     switch(action.type){
//         case COUNTER_INCREMENT:{
//                 state.count=state.count+action.payload
//                 return {...state}
//         }
//         case COUNTER_DECREMENT:{
//             state.count=state.count-action.payload
//             return {...state}
//     }
//         default:{
//             return state
//         }
//     }
    
// }


export const reducer=(state=initialState, {type,payload})=>{
    console.log(state,type,payload)
    switch(type){
        case COUNTER_INCREMENT:{
                state.count=state.count+payload
                return {...state}
        }
        case COUNTER_DECREMENT:{
            state.count=state.count-payload
            return {...state}
    }
        default:{
            return state
        }
    }
    
}

