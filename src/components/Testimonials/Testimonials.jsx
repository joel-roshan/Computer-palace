import React from 'react'
import styles from './Testimonials.module.css'
import Testimonialcard from '../Testimonialcard/Testimonialcard'
const Testimonials = () => {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
        <div className={styles.top}>
            Testimonials
        </div>
        <div className={styles.middle}>
            <div className={styles.rotate}>
                Hear From
            </div>
            <Testimonialcard 
        review="it is the best place ever"
        person="Akhil"
      />
        </div>
      
    </div>
    </div>
  )
}

export default Testimonials
