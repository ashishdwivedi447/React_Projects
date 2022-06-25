import React ,{useState} from 'react'

const TodoInput = () => {
  const[text,setText]=useState('')
  const handleAdd=()=>{
    
  }
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='add Some Text'/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
