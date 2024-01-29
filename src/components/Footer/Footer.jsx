import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.top}>
          <div className={styles.title}>COMPUTER PALACE</div>
          <div className={styles.text}>Your Gadgets, Our Expertise</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.icons}>
           <a href="https://www.instagram.com/invites/contact/?i=fpdrs2xtvc3k&utm_content=3dsj87r"> <FaInstagram size={24} /></a>
          </div>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/profile.php?id=100064029003823&mibextid=ZbWKwL"><FaFacebook size={24} /></a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
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
  );
};

export default Footer;
