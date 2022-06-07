import { useState } from "react"
import { TodoItem } from "./TodoItem"

export const CompletedTodo=({completedTodo,data}) =>{
   
return( 
    <>    <button id="show" onClick={()=>{completedTodo(data)}}>Show Completed Todo's</button>
    
    </>

)
}