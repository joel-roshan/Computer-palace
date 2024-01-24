import React from 'react'
import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
        <div className={styles.locationtext}>
            Location
        </div>
        <div className={styles.mapcontainer}>
        <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124351.69778843594!2d76.45203050569097!3d9.542998454220143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0627354026a205%3A0x958092d08cfdebfb!2sComputer%20Palace!5e0!3m2!1sen!2sin!4v1705890774167!5m2!1sen!2sin" 
        
        title="map"
        
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">

        </iframe>
        </div>
        </div>
        <div className={styles.address}>
        Computer Palace Laptop Servicing Center,Aramanappady,<br/>
        City Textile Road ,Aramanappady, Changanacherry, <br />
        Kottayam, 686101, <br />
        Kerala
        </div>
    </div>
    </div>
  )
}

export default Map
