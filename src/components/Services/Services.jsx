import React from 'react';
import styles from './Services.module.css';
import Servicescard from './Servicescard';
import Pic1 from '../../assets/ethicval-service.png';
import Pic2 from "../../assets/phone-repair.jpeg"
import Pic3 from "../../assets/ledtv.jpeg"

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.title}>
        Our Services
      </div>
      <div className={styles.container}>
        <div className={styles.tiltedholder}>
             <div className={styles.tilted}>Service</div>
        </div>
        <div className={styles.servicecardsholder}>
          <Servicescard 
            img={Pic1}
            text="Computer Repair"
          />
          <Servicescard 
            img={Pic2}
            text="Phone Repair"
          />
          <Servicescard 
            img={Pic3}
            text="Led TV Repair"
          />
         
        </div>
      </div>
      <div className={styles.bottomthing}>
        
      </div>
    </div>
  );
};

export default Services;
