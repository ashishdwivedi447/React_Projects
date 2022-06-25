import { Counter } from "./Component/Counter/Counter";
import Todos from "./Component/Todos/Todos"
import "./App.css";
import { useState } from "react";

export default function App() {
// Request=> Success=>data /Error =>error

  const [show,setShow]=useState(false)
  return (
    <div className="App">
      {/* <button onClick={()=>setShow(!show)}>{show?"Show Counter":"Show Todos"}</button> */}
      {/* {show? <Todos/>:<Counter/>} */}
      <Counter/>
      <Todos/>
    </div>
  );
}
