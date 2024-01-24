import React from 'react'
import styles from './Testimonialcard.module.css'

const Testimonialcard = (props) => {
  return (
    <div className={styles.main}>
        <div className={styles.top}>
           {`" ${props.review} "`}
        </div>
        <div className={styles.bottom}>
            {props.person}
        </div>
    </div>
  )
}

export default Testimonialcard
