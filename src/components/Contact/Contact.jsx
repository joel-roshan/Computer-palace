import React from 'react'
import styles from './Contact.module.css'
import Contactcard from '../Contactcard/Contactcard'
import Time from "../../assets/clock-ethicval.png"
import Phone from "../../assets/ethicval-phone.png"
import Email from "../../assets/ethicval-email.png"
const Contact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.contacttitle}>
            
                Contact 
            
        </div>
        <div className={styles.contactcontainer}>
        <Contactcard
            text="Timings"
            img={Time}
            alt="Time"
            info={
                <div dangerouslySetInnerHTML={{ __html: "MON - SUN<br/>08:00 AM<br/>08:00 PM" }} />
                 }
      />
        <Contactcard
        text="Phone"
        img={Phone}
        alt="Phone"
        info={
            <div dangerouslySetInnerHTML={{ __html: "<br /><br />9447183583" }} />
            }
        
      />
        <Contactcard
        text="E-mail"
        img={Email}
        alt="Email"
        info={
            <div dangerouslySetInnerHTML={{ __html: "<br /><br />computerpalace@gmail.com" }} />
            }
      />
    </div>
    </div>
  )
}

export default Contact
