import React from 'react'
import styles from './Faq.module.css'
import Faqcard from '../Faqcard/Faqcard'

const Faqpage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        FAQs
      </div>
    <div className={styles.faqpage}> 
    <div className={styles.left}>
      <div className={styles.tiltedholder}>
        <div className={styles.tiltedtext}>
          Still Have Questions
        </div>
      </div>
      <div className={styles.contactfaq}>
        <button className={styles.contactbtn}>
           <a href="#contact"> Contact Us</a>
        </button>
      </div>
      </div>
      <div className={styles.right}>
      <div className={styles.faqcardholder}>
      <Faqcard 
      question="How long does it usually take to get my device repaired?"
      answer="Most repairs can be done within the same day, while more complex issues might take 1-2 days. We'll keep you updated throughout the process.
      "
      />
       <Faqcard 
      question="How long does it usually take to get my device repaired?"
      answer="Most repairs can be done within the same day, while more complex issues might take 1-2 days. We'll keep you updated throughout the process.
      "
      />
       <Faqcard 
      question="How long does it usually take to get my device repaired?"
      answer="Most repairs can be done within the same day, while more complex issues might take 1-2 days. We'll keep you updated throughout the process.
      "
      />
      </div>
    </div>  
    </div>
    </div>
  )
}

export default Faqpage
