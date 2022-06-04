import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Home.module.css"
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.mainbox}>
      <div onClick={()=>navigate("/men")}>
          <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='men'/>
      </div>
      <div onClick={()=>navigate("/women")}>
          <img src="https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='women'/>
      </div>
      <div onClick={()=>navigate("/kids")}>
          <img src="https://www.dashinfashion.com/shop/wp-content/uploads/2022/02/Lanvin-Paris-Kids-Girls-Light-Blue-Red-Heart-Chiffon-Long-Sleeve-Party-Dress.jpg" alt='kids'/>
      </div>
    </div>
  )
}

export default Home
