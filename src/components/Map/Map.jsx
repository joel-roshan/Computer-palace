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
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1426.052796046175!2d76.54171096194553!3d9.446798472749997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjYnNDYuMSJOIDc2wrAzMiczMS4xIkU!5e0!3m2!1sen!2sin!4v1706527067200!5m2!1sen!2sin" 
        
        title="map"
        
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">

        </iframe>
        </div>
        </div>
        <div className={styles.address}>
         Computer Palace -Laptop Mobile Phone Service <br />
          PMJ Complex,<br />
          Near KSRTC Privat Bus stand, <br />
          Changanassery,<br />
          Kottayam, 686101,<br />
          Kerala
        </div>
    </div>
    </div>
  )
}

export default Map
