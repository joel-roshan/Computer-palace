import React from 'react'
import styles from './Servicescard.module.css'
import Image from 'next/image'
const Servicescard = (props) => {
  return (
    <div className={styles.servicecard}>
      
        <Image className={styles.img} src={props.img} alt="Computer Palace" />
      
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}

export default Servicescard
