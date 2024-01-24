"use client";
import React from 'react'
import styles from './Faqcard.module.css'
import { useState } from 'react'
import Arrow from "../../assets/ethicval-downarrow.png"
import Image from 'next/image'

function Faqcard(props) {
  const [open, setOpen] = useState(false)

  var color="red";
  
  const toggleOpen = () => {
    setOpen(!open);
  };
  
  
  return (
    // <div className={styles.faqcardbody} >
    //   <div className={styles.faqcardcontent} onClick={toggleOpen}>
        
    //    <div> <p className="faqcardquestion">{props.question}</p></div>

    //     {!open && (<div><button className={styles.faqcardopen} onClick={toggleOpen}>
    //       <Image className={styles.downarrow} src={Arrow} alt="arrow"/>
    //     </button></div>)}
    //     {open && (
    //     <button className={styles.faqcardclose} onClick={toggleOpen}>
    //       <Image className={styles.uparrow} src={Arrow} alt="arrow"/>
    //     </button>
    //   )}
    //     </div>
    //     {open && <div className={styles.faqanswerholder}> <p className="faqcardanswer"><br/>{props.answer}</p></div>}
    // </div>
    <div className={styles.faqcardbody}>
      <div className={styles.faqcardcontent} onClick={toggleOpen}>
        <div className={styles.faqcardquestion}>
          <p>{props.question}</p>
        </div>
       {!open && ( <div className={styles.faqcardopen}>
          <Image className={styles.downarrow} src={Arrow} alt="arrow"/>
        </div> )}
        {open && ( <div className={styles.faqcardopen}>
          <Image className={styles.uparrow} src={Arrow} alt="arrow"/>
        </div> )}
      </div>
      {open && ( <div className={styles.faqanswerholder}>
        <p>{props.answer}</p>
      </div> )}
    </div>
  );
}

export default Faqcard