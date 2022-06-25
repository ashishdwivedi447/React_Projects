
import { incrementCounter,decrementCounter } from "../../Redux/action";
import { store } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const  counter  = useSelector(store=>store.counter);
  const dispatch=useDispatch()
  const handleIncrement = () => {
    dispatch(incrementCounter(1));
  };
  const handleDecrement = () => {
    dispatch(dispatch(decrementCounter(1)));
  };
  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export { Counter };
