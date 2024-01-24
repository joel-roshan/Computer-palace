"use client"
import React from 'react'
import { useState } from 'react'
import styles from './Tabs.module.css'
import Image from 'next/image'
import Icon1 from "../../assets/ethicval-icon.png"
import LeftImg from "../../assets/ethicval-tabimg.png"
const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.tabscontainer}>
            <div className={styles.tabtittle}>
                Why Trust Us?
            </div>
          <div className={styles.tabBtn}>
            <div className={styles.singletab}>
            <button
            className={toggleState === 1 ? styles.activeTab : styles.tab}
            onClick={() => toggleTab(1)}
          >
            <div className={styles.tabimgcontainer}>
                <Image className={styles.tabimg} src={Icon1} alt="Icon" />
            </div>
            <div className={styles.tabtxt}>
                Exceptional staff
            </div>
          </button>
          </div>
          <div className={styles.singletab}>
            <button
            className={toggleState === 2 ? styles.activeTab : styles.tab}
            onClick={() => toggleTab(2)}
          >
            <div className={styles.tabimgcontainer}>
                <Image className={styles.tabimg} src={Icon1} alt="Icon" />
            </div>
            <div className={styles.tabtxt}>
                Premium Quality
            </div>
          </button>
          </div>
          <div className={styles.singletab}>
            <button
            className={toggleState === 3 ? styles.activeTab : styles.tab}
            onClick={() => toggleTab(3)}
          >
            <div className={styles.tabimgcontainer}>
                <Image className={styles.tabimg} src={Icon1} alt="Icon" />
            </div>
            <div className={styles.tabtxt}>
                Affordable Pricing
            </div>
          </button>
          </div>
          <div className={styles.singletab}>
            <button
            className={toggleState === 4 ? styles.activeTab : styles.tab}
            onClick={() => toggleTab(4)}
          >
            <div className={styles.tabimgcontainer}>
                <Image className={styles.tabimg} src={Icon1} alt="Icon" />
            </div>
            <div className={styles.tabtxt}>
                High Standards
            </div>
          </button>
          </div>
          </div>
        </div>
        <div className={styles.tabcontent}>
            <div className={styles.left}>
                <div className={styles.leftimgcontainer}>
                    <Image className={styles.leftimg} src={LeftImg} alt="Repair" />
                </div>
            </div>
            <div className={styles.right}>
          <div
            className={toggleState === 1 ? styles.activeContent : styles.content}
          >
            
            <div className={styles.txtholder}>
            Our team comprises highly skilled and certified technicians with a deep understanding of the latest technologies. Each technician undergoes rigorous training to stay ahead of industry advancements, ensuring they are equipped to handle any repair challenge. 
            </div>
            
          </div>
          <div
            className={toggleState === 2 ? styles.activeContent : styles.content}
          >
            
            <div className={styles.txtholder}>
            We prioritize premium quality, ensuring our customers receive top-notch repairs and services. Our commitment to excellence is reflected in every aspect of our work, from skilled technicians to using high-quality components. Your satisfaction and device performance are our utmost priorities.            </div>
            
          </div>
          <div
            className={toggleState === 3 ? styles.activeContent : styles.content}
          >
            
            <div className={styles.txtholder}>
            We guarantee affordability in our services, providing transparent and competitive pricing. Our commitment is to offer cost-effective solutions without compromising on the quality of our services. Your financial convenience is also our priority.
            </div>
            
          </div>
          <div
            className={toggleState === 4 ? styles.activeContent : styles.content}
          >
            <div className={styles.txtholder}>
            We adhere to high industry standards, ensuring that each repair and service meets stringent quality benchmarks. With a dedicated focus on excellence, our skilled technicians follow best practices, utilizing the latest technologies to uphold the highest standards in the industry. Your devices are in capable hands, meeting and exceeding industry expectations.

            </div>
            
          </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Tabs
