import React from 'react'
import TodoItem from './TodoItem'
import "../App.css"
import styles from "./Todo.module.css"
const TodoList = ({todo}) => {
  return (
    <>
      {todo.map((e,index)=>{
                return <div key={e.id} >
                        <TodoItem todo={e} index={index} />
                    </div>
            })}
    </>
  )
}

export default TodoList
