import React from 'react'
import "../App.css"
import styles from "./Todo.module.css"
import { useState } from 'react'

const TodoItem = ({todo, index}) => {
  const[iscompleted,setIscompleted]=useState(false)
  // const handleSub=(e,iscompleted)=>{
  //   console.log(e,!iscompleted);
  // }
  return (
    <div className={styles.main} onClick={()=>setIscompleted(!iscompleted)}>
      <h3 style={{marginLeft:"5px"}}>{todo.value}</h3>
      
      <div className={(iscompleted==true)? `${styles.purple}`:`${styles.blue}`}>  
        <div className={styles.smallcircle}>

        </div>
      </div>
    </div>
  )
}

export default TodoItem
