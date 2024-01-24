import React from 'react';
import styles from './Footer.module.css';
import { FaWhatsapp } from "react-icons/fa";
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
            <FaWhatsapp size={24} />
          </div>
          <div className={styles.icons}>
            <FaFacebook size={24} />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.address}>
          Computer Palace Laptop Servicing <br />
          Center, Aramanappady,<br />
          City Textile Road ,Aramanappady, <br />
          Changanacherry,<br />
          Kottayam, 686101,<br />
          Kerala
        </div>
      </div>
    </div>
  );
};

export default Footer;
