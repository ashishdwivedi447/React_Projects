import React from 'react'
import "./App.css"
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store/action.types'
import { Add, Sub } from './store/action'

const App = () => {
  // useDispatch is used to perform the action
  const dispatch=useDispatch();
  // useSelector is used to access the state/ read value from store

  const count=useSelector((state)=>state.count)
  return (
    <div className='App'>
      <h1>Count:{count}</h1>
      {/* <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(count+1)}>+</button> */}

      <button onClick={()=>dispatch(Sub(5))}>-</button>
      <button onClick={()=>dispatch(Add(10))}>+</button>
      
    </div>
  )
}

export default App
