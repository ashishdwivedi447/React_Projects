import { useState } from 'react';
import styles from '../components/Counter.module.css';

function Counter() {
  const [counter,setCounter]=useState(0);

  const Counterfun=(value)=>{
    setCounter(counter + value);
  }
  const Counterdouble=(value)=>{
    setCounter(counter * value);
  }
  return (
   <>
     <h1 className={styles.head}>Hello! I am a Counter</h1>
     <h1 className= {`${counter % 2 === 0 ? styles.green : styles.red}`}>{counter}</h1>
     <div className={styles.buttonTab}>
     <button onClick={()=>Counterfun(1)}>Increment</button>
     <button onClick={()=>Counterfun(-1)}>Decrement</button>
     <button onClick={()=>Counterdouble(2)}>Double</button>
     </div>
 </>
  );
  }
export default Counter;