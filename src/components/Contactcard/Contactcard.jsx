import React from 'react'
import styles from "../Contactcard/Contactcard.module.css"
import Image from 'next/image'
const Contactcard = (props) => {
  return (
    <div className={styles.contactcard}>
      <div className={styles.top}>
        <p className={styles.contactcardtext}>
            {props.text}    
        </p> 
      </div>
      <div className={styles.bottom}>
        <Image className={styles.contactcardlogo} src={props.img} alt={props.alt}/>
      </div>
      <div className={styles.info}>
        <div className={styles.line1}>
            {props.info}
        </div>
        
      </div>
    </div>
  )
}

export default Contactcard
