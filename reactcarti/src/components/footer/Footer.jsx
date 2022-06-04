import React from 'react'
import styles from "./Footer.module.css"
import { FaInstagram,FaFacebook,FaTwitter} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.foot}>
      <div className={styles.headfoot}>
        <div className={styles.headfootchild}>
          <h3 onClick={()=>navigate("/about")}>About Us</h3>
          <h3>Job Opportunities</h3>
          <h3 onClick={()=>navigate("/faq")}>FAQ</h3>
        </div>
        <div style={{marginRight:"15%"}}><h3>Connect Us Here</h3></div>
      </div>
      <div className={styles.mainfoot}>
          <div className={styles.main1}>
          </div>
          <div className={styles.main2}>
            <div><FaInstagram size="3em" onClick={()=>{window.location.replace("https://www.instagram.com/"); return null}}/></div>
            <div><FaFacebook size="3em" onClick={()=>{window.location.replace("https://www.facebook.com/"); return null}}/></div>
            <div><FaTwitter size="3em" onClick={()=>{window.location.replace("https://www.twitter.com/"); return null}}/></div>
          </div>
      </div>
    </div>
  )
}

export default Footer
