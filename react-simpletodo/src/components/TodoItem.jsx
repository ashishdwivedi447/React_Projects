import React from 'react'
import "../App.css"
import styles from "./Todo.module.css"

const TodoItem = ({todo, index}) => {
  return (
    <>
      <h3 style={{marginLeft:"5px"}}>{todo.value}</h3>
      <img src={index%3==2? "https://p.kindpng.com/picc/s/738-7386271_neon-purple-circle-neoncircle-purplecircle-glowing-neon-png.png":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PxkJ7p88Kr0MNK0O_StaWtmvzjMOSyZJYg&usqp=CAU"}/>
    </>
  )
}

export default TodoItem
