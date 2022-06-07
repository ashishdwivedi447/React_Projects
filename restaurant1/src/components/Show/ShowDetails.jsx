import axios from 'axios';
import React, { useState,useEffect} from 'react'
import styles from "./Show.module.css"
import {FaStar} from "react-icons/fa"
import {FaCcMastercard,FaMoneyBillAlt} from "react-icons/fa"
const ShowDetails = () => {
  const [rest,setRest]=useState([]);
  const [page,setPage]=useState(1)
  const [totalCount,setTotalCount]=useState(0)
  useEffect(()=>{
    getData()
  },[page])
  const getData=()=>{
    axios({
      method: 'get',
      url: `http://localhost:8080/restaurant?_page=${page}&_limit=5`,
    })
      .then(function (response) {
        setRest(response.data)
        setTotalCount(Number(response.headers["x-total-count"]))
      });
  }
  // const handleChange=(e)=>{
  //   if(e.target.value=="High"){
  //     console.log(e.target.value)
  //     let x=rest.sort((a,b)=>{return (b.price-a.price)})
  //     setRest(x)
  //   }
  //   else if(e.target.value=="Low"){
  //     console.log(e.target.value)
  //     let x=rest.sort((a,b)=>{console.log(typeof(a.price),b.price)})
  //     setRest(x)
  //   }
  // }
  const handleStar=(e)=>{

    console.log(e.target.value)
  }
  const handleCash=(e)=>{
    if(e.target.value="Cash"){
      let y=rest.filter((e)=>e.card==false)
      setRest(y)
    }
    else if(e.target.value="Card"){
      let y=rest.filter((e)=>e.card==true)
      setRest(y)
    }
  }
   
 
 
  return (
    <div>
      <div className={styles.Buttons}>
        <select onChange={handleChange}  >
          <option value="High">High to low</option>
          <option value="Low">Low to High</option>
        </select>
        <button value="1star" onClick={handleStar} >1 Star</button>
        <button onClick={handleStar}  value='2star' >2 Star</button>
        <button  onClick={handleStar} value='3star'>3 Star</button>
        <button onClick={handleStar}  value="4star">4 Star</button>
        
        
        <button onClick={handleCash} value='Cash'>Cash Only</button>
        <button onClick={handleCash} value='Card'>Card Only</button>
      </div>
      <div className={styles.restaurant}>
        {rest.map((e)=>{
          return (
            <div key={e.id}>
              <img className={styles.imagep} src={e.image} alt="rest"/>
              <div className={styles.headdiv}>
                {(e.card==true)?<FaCcMastercard size="3em"/>:<FaMoneyBillAlt size="3em"/>}
                <div >Ratings: {e.rating} </div>
                <FaStar size="2em"/>
              </div>
              <p className={styles.headhotel}>{e.name}</p>
              
              <div className={styles.food}>{e.food.map((k,index)=><p key={index}>{k}</p>)}
               </div>
              <div className={styles.amount}>
                <p>MIN: Rs. {e.min}</p>
                <p>PRICE: Rs. {e.price}</p>
                <p>OFFER: Rs. {e.offer}</p>
              </div>  
            </div>
          )
        })}
      </div>
      <div className={styles.Bottom}>
      <button disabled={page<=1} onClick={()=>{setPage(page-1)}}>prev</button>
      <button  disabled={totalCount<= page*5} onClick={()=>{setPage(page+1)}}>next</button>
      </div>
    </div>
  )
}

export default ShowDetails
