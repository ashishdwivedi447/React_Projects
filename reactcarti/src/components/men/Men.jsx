import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Men.module.css'
const Men = () => {
  const[menData,setMenData]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get(" http://localhost:8080/men").then(d=>{
      setMenData(d.data)
    })
  }
  return (
    <div>
      <h2>Men</h2>
      <div className={styles.main}>
        {menData.map((e)=>{
          return(
            <div className={styles.box} key={e.id}>
              <img src={e.image} alt="menimage" />
              <h3>{e.title}</h3>
              <h5>Rs. {e.price}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Men
