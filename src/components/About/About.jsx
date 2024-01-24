import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'
import Logo from "../../assets/ethivcal-about-logo.png"
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
       <div className={styles.top}>
        <div className={styles.left}>
            <div className={styles.title1}>
                About Us
            </div>
            <div className={styles.title2}>
                COMPUTER PALACE
            </div>
            
        </div>
        <div className={styles.right}>
                <Image className={styles.logo} src={Logo} alt="Computer Palace"/>
            </div>
       </div>
       <div className={styles.bottom}>
              <div className={styles.left1}>
                <div className={styles.blue}>
                
                </div>
              </div>
              <div className={styles.right1}>
                <p className={styles.text}>
                    Computer Palace is more than just a repair shop; we&#39;re a team of
                    dedicated tech enthusiasts driven by a common goal - to provide
                    you with top-notch repair and service solutions for your laptops andsmartphones. Our journey began with a simple mission: to bridge
                    the gap between technology and a seamless user experience.

                    Here, we foster relationships. When you choose us, you&#39;re choosing
                    a partner dedicated to ensuring your devices function at their best.
                    Whether it&#39;s a cracked screen, a malfunctioning keyboard, or a
                    software hiccup, consider it solved with Computer Palace.

                    Ready to experience the Computer Palace difference? Explore our
                    services, meet our team, and let us be your trusted allies in the
                    world of technology. Your laptops and smartphones deserve the
                    royal treatment – and that&#39;s exactly what we offer.

                    Excellence in Every Repair: We don&#39;t just fix devices; we elevate
                    them. With attention to detail and a commitment to quality, our
                    repairs are a testament to our dedication to excellence.

                    Swift and Reliable Service: We understand the importance of a fast
                    turnaround. Our team works tirelessly to ensure your devices are
                    back in your hands promptly, without compromising on the quality
                    of service.

                </p>
              </div>
       </div>
      </div>
    </div>
  )
}

export default About
