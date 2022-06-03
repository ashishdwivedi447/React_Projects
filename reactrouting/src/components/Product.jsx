import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [product,setProduct]=useState({})
  const {id}=useParams()
 useEffect(()=>{
   if(id){
         fetch(`http://localhost:8080/products/${id}`).then(d=>d.json())
        .then(d=>{
          setProduct(d)
        }).catch((e)=>{
          console.log(e)
        })
   }
   
 },[id])
  
  return (
    <div>
      PRODUCT DETAILS: {(product.name!==undefined)? `id: ${id} name: ${product.name} price: Rs. ${product.price}`:"Product doesnot exist"}
    
    </div>
  )
}

export default Product
