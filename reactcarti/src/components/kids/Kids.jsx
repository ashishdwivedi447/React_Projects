import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Kids.module.css'
const Kids = () => {
  const[kidsData,setKidsData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get(" http://localhost:8080/kids").then(d=>{
      setKidsData(d.data)
    })
  }
  return (
    <div>
      <h2>Kids</h2>
      <div className={styles.main}>
        {kidsData.map((e)=>{
          return(
            <div className={styles.box} key={e.id}>
              <img src={e.image} alt="imgwomen" />
              <h3>{e.title}</h3>
              <h5>Rs. {e.price}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Kids

