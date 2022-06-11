import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./DataSlider.module.css"
import {FaArrowCircleLeft,FaArrowCircleRight} from "react-icons/fa"

const DataSlider = () => {
    const [data,setData]=useState([]);
    const [current,setCurrent]=useState(0);
    const length=data.length;
    const prevClick=()=>{
        setCurrent((current===0)?length-1:current-1)
    }
    const nextClick=()=>{
        setCurrent((current===length-1)?0:current+1)
    }
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        axios.get("http://localhost:8080/slider").then(d=>{
            
            setData(d.data)
        })
       
    }
  return (
    <div className={styles.mainslider}>
        <FaArrowCircleLeft className={styles.leftArrow} size="2em" onClick={prevClick}/>
        <div>{data.map((e,index)=>{
                return(
                    <div key={index}>
                        {index===current&&(<img src={e.img} alt="slider" />)}
                    </div>
                )
            })}
        </div>
        <FaArrowCircleRight className={styles.rightArrow} size="2em" onClick={nextClick}/>
    </div>
  )
}

export default DataSlider
