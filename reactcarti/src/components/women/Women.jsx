import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Women.module.css'
const Women = () => {
  const[womenData,setWomenData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get(" http://localhost:8080/women").then(d=>{
      setWomenData(d.data)
    })
  }
  return (
    <div>
      <h2>Women</h2>
      <div className={styles.main}>
        {womenData.map((e)=>{
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

export default Women

