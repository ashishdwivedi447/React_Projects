import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from "uuid";
import styles from "./Todos.module.css"

const Todos = () => {
    const [newtodo,setnewTodo]=useState("");
    const [todos,setTodos]=useState([]);

    useEffect(()=>{
        getTodos();
     },[])
     const getTodos=()=>{
         
         return fetch(`http://localhost:8080/languages?_page=3&_limit=4`)
         .then(d=>d.json())
         .then(d=>{
              setTodos(d)})
     }

    const handleAdd=(newtodo)=>{
        const payload={
            "name":newtodo,
            "status":false,
            "id":uuidv4(),
        }
        return fetch("http://localhost:8080/languages",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(d=>d.json())
        .then(d=>{
            return getTodos()})
       
    }
  return (
    <div className={styles.main}>
        <h3>REACT TODOS</h3>
      <div className={styles.inputbox}>
          <input placeholder='add Todo' value={newtodo} onChange={(e)=>setnewTodo(e.target.value)}/>
            <button onClick={()=>{if(newtodo){
                handleAdd(newtodo);
                setnewTodo("");
            }else{
                isDisabled(true)
            }
            }} >save</button>
      </div>
      <div>
          {todos.map((e)=><div key={e.id}><h3>{e.name}</h3></div>)}
      </div>
    </div>
  )
}

export default Todos
