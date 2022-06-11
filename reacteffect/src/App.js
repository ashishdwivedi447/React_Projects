import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Counter from "./components/Counter";
import Github from "./components/Github";
import Rooms from "./components/Rooms";
import "./App.css";

export default function App() {
  const [click, setClick] = useState(0);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  // useEffect
  useEffect(() => {}, [click]);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>TOGGLE</button>
      {show && <Chat />}
      {/* <Github /> */}
      {/* <h1>{click}</h1>
      <button onClick={() => setClick(click + 1)}>CLICK ME</button>
      <h1>COUNT DOES NOT UPDATE TITLE {count}</h1>
      <button onClick={() => setCount(count + 1)}>CLICK ME</button> */}
      {/* <Rooms/> */}
    </div>
    
  );
}

// 1. useEffect with only callback
// useEffect(callback)
// after each render, the useEffect is called
// generally never want to use
// 2. useEffect with no dependencies, or only once
// useEffect(callback,[])

