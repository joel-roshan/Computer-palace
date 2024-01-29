import React from 'react';
import styles from './Hero.module.css';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import HeroImg from '../../assets/hero-bg-ethicval.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          Your Gadgets,<br />Our Expertise
        </div>
        <div className={styles.desc}>
          At Computer Palace, we believe in the magic of seamless connectivity and the power of perfectly functioning devices. Step into a world where expertise meets innovation, and your mobiles and laptops are treated with the care they deserve.
        </div>
        <div className={styles.enquire}>
          <button className={styles.herobtn}>
            <a href="#contact">Enquire Now</a>
          </button>
        </div>
      </div>
      <div className={styles.right}>
        
        <Image className={styles.heroimg} src={HeroImg} alt="computer and phone"/>
      
      </div>
    </div>
    </div>
  );
};

export default Hero;
