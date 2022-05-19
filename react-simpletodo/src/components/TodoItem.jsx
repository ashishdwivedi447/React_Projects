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
      {/* <img src={index%3==2? "https://p.kindpng.com/picc/s/738-7386271_neon-purple-circle-neoncircle-purplecircle-glowing-neon-png.png":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PxkJ7p88Kr0MNK0O_StaWtmvzjMOSyZJYg&usqp=CAU"}/> */}
      <div className={(iscompleted==true)? `${styles.purple}`:`${styles.blue}`}>  
        <div className={styles.smallcircle}>

        </div>
      </div>
    </div>
  )
}

export default TodoItem
