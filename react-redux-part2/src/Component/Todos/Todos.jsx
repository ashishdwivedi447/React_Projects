import React, { useEffect } from "react";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../../Redux/action";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch,useSelector} from "react-redux";

const Todos = () => {

  const {todos,isLoading,isError}=useSelector((store)=>store.data)  
  // console.log(todos)
  const dispatch = useDispatch();
  const handleAdd=(payload)=>{
    addTodos(payload).then(()=>getTodos()).catch(err=>console.log(err))
  }

  const addTodos=(payload)=>{
    const requestAction = addTodoRequest();
    dispatch(requestAction);

    return axios
      .post(`http://localhost:8080/todos`,payload)
      .then((res) => {
        const successAction = addTodoSuccess(res.data);
        dispatch(successAction);
        
      })
      .catch((err) => {
        const errorAction = addTodoFailure(err);
        dispatch(errorAction);
      });
  }
  const getTodos = () => {
    // Request=>Success/Error
    const requestAction = getTodoRequest();
    dispatch(requestAction);

    return axios
      .get(`http://localhost:8080/todos`)
      .then((res) => {
        const successAction = getTodoSuccess(res.data);
        dispatch(successAction);
        
      })
      .catch((err) => {
        const errorAction = getTodoFailure(err);
        dispatch(errorAction);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log("TODOS Component Rendering",todos)
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput onClick={handleAdd}/>
      {todos.length && todos.map((e,index)=>{
        return <div key={e.id}>
          <p>{index+1}. {e.title}</p>
          <p>{e.status}</p>
        </div>
      })}
    </div>
  );
};

export default Todos;

// Further improvement of earlier code