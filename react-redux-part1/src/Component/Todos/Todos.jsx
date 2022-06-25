import React, { useEffect } from "react";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from "../../Redux/action";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch,useSelector,shallowEqual } from "react-redux";

const Todos = () => {
  // ........................................................
  // const store=useSelector(store=>store)

  // this type of syntax is discouraged for accessing any state value from the store
  // as while updating the counter part todo also get rendered

  // ........................................................
  // const {todos}=useSelector(store=>store)

  // this is also discouraged as it is also doing the same thing as above
  // as destructuring should be done after the component has rerendered
  // & when we get some final output then only we destructure it to get something out of it.
  // but here we are destructing even before getting the store 
  // ........................................................

  // so this USESELECTOR() has some logic and it decides if component
  // should rerender  or not...

  // ### UseSelector provide second argument =>that is a function
  // its an equality function in the name of "##shallowEqual##"

  // .......................................................
  // const todos=useSelector(store=>store.todos)
  // const isLoading=useSelector(store=>store.isLoading);
  // const isError=useSelector(store=>store.isError)


  const {todos,isLoading,isError}=useSelector((store)=>{
    return {
      todos:store.todos,
      isLoading:store.isLoading,
      isError:store.isError
    }
  },shallowEqual)   //same way as above
  //  now updating one component need not required rendering of another component
  // ......................................................

  
  
  
  // console.log(todos)
  const dispatch = useDispatch();
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
  console.log("TODOS Component Rendering")
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput />
      {todos.length && todos.map((e)=>{
        return <div key={e.id}>
          <p>{e.id}. {e.title}</p>
          <p>{e.status}</p>
        </div>
      })}
    </div>
  );
};

export default Todos;

// .....................................
// let obj1={
//   name:"Sam",
//   place:"Delhi"
// }
// let obj2=obj1
// obj2.name="Tanu"
// console.log(obj1)
//  output:= {name:"Tanu",place"Delhi}
// .....................................
// console.log(obj1===obj2)
// output:= true (referencing to the same object)
// .....................................
// ## REDUX doesn't want us to mutate the data
//  or having the same references and then update 
// the data or mutate the data inside the object directly,
// so , In order to avoid this we use spread object syntax.
// ....................................
// let obj2={...obj1}
// creating new object and passing the obj1 attributes to it
// console.log(obj1===obj2)
// output:= false (referencing to different objects)
// ...................................
// useSelector check the shallowEqual check 
// n when he came to know that its different 
// object then only it rerender that component

// If we donot use spread operator then 
// useSelector never going to know the value or
// going to know that state has changed..

// byDefault useSelector check (===)for reference check
// else we have shallowEqual check in react-redux we use it when we want to check one level deep values  
// ...........................................

// let obj1={
//   name:"Sam",
//   place:"Delhi"
// }
// let obj2={
//   name:"Sam",
//   place:"Delhi"
// }
// console.log(obj1===obj2)=>false
// console.log(shallowEqual(obj1,obj2))=>true
//"" ##shallowEqual##"" check 1 level deep
// "" ##Deep Level Check##"" check till the final depth

// in case of nested arrays and nested obects shallowEqual check doesn't work ..
// so the good practice is to subscribe to particular variable directly