
import { useEffect, useState } from "react";
import "../App.css";

const Counter=({initialProp,finalProp})=>{
    const [count,setCount]=useState(initialProp);
        useEffect(()=>{
            const id=setInterval(()=>{
                setCount((prev)=>{
                    if(prev===finalProp){
                        clearInterval(id);
                        return prev;
                    }
                    // console.log(prev)
                        return prev+1;
                })
            },1000)
            return()=>{
                clearInterval(id);
            }
        })
    return (
        <div>
            <div className="headf"><h1>INCREMENT TIMER</h1></div>
            <div className="times">
            <h2>Initial Time(seconds): {initialProp}</h2>
            <h2>Final Time(seconds): {finalProp}</h2>
            </div>
            <div className="displayCount">
                <p>Timer: {count}</p>
            </div>
        </div>
    )
}
export default Counter