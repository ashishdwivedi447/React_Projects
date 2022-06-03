import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Products = () => {
const [products,setProducts]=useState([])
  useEffect(()=>{
    getData()
  },[])
  
  const getData=async ()=>{
     await fetch("http://localhost:8080/products").then((d)=>d.json()).then(d=>{
     setProducts(d);
     })
  };

  return (
    <div>
      Products
        <div>
          <table style={{marginLeft:"200px",border:"2px solid black", marginTop:"5px", padding:"4px"}}>
              <thead style={{backgroundColor:"aqua"}}>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
              {products.map((e)=>{
                return(
                    
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>Rs. {e.price}</td>
                    <td><Link to={`/products/${e.id}`}>Click Here</Link></td>
                  </tr>)})}
                </tbody>
          </table>
        </div>
    </div>
  )
}

export default Products
