import React from 'react'
import styles from "./Child.module.css";
const Child = ({subheading,heading,logo,color,date,devices}) => {
  return (
    <div className={styles.childmain} style={{backgroundColor:`${color}`}}>
        
        <div className={styles.imgbox}>
            <img src={logo} className={styles.imglogo}/>
        </div>
        <div className={styles.datebox}>{date}</div>
        <div className={styles.casebox}>Case Study</div>
        <div className={styles.headingbox}>
            <p>{heading}</p>
            <p>{subheading}</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div className={styles.type}>{devices} - Mobile</div>
            <div className={styles.arrowbox}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4POF_9-LoM2SuSZtlNy87XIShT6HH_2XMTa_TZ75ebFyPhrfOKIbCSKsDEO5chIyEmo&usqp=CAU"/>
            </div>
        </div>
    </div>
  )
}

export default Child
