import React, { useState } from 'react'
import "../App.css"
import styles from "./Todo.module.css"
import TodoItem from './TodoItem';
import TodoList from './TodoList';
const Todo = () => {
    const [value, setValue]=useState("");
    const [todo, setTodo]=useState([])
    const handleChange=(e)=>{
        let newVal=(e.target.value);
      
        setValue(newVal);
    }
    const handleAdd=()=>{
            // console.log(e,value)
            setTodo([...todo,{value:value, id:Date.now()}])
            setValue("")
    }
    // console.log(todo)
  return (
    <>
        <div>
            <TodoList todo={todo}/>
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"15px"}}>
            <input placeholder='Write Something' value={value} onChange={(e)=>{handleChange(e)}}></input>
            <button onClick={()=>{handleAdd()}}>+</button>  
        </div>
        
    </>
  )
}

export default Todo
