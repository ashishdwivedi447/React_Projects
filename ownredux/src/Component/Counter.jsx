import { store } from "../Redux/store";
import { incrementCounter,decrementCounter } from "../Redux/action";
import { useState } from "react";
const Counter = () => {
  const [local, setLocal] = useState(0);
  const { counter } = store.getState();
  console.log(counter);
  const { dispatch } = store;
  const handleIncrement = () => {
    dispatch(incrementCounter(10));
    setLocal((prev) => prev + 1);
  };
  const handleDecrement = () => {
    dispatch(decrementCounter(10));
    setLocal((prev) => prev - 1);
  };
  return (
    <>
      <h1>Count {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export { Counter };
