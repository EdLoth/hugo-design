import React from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';

import BackToIMG from '../../assets/BackToTop.png'

import styles from './Back.module.css'

export function BackToTop() {

    function teste(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    return(
        <button onClick={teste} className={styles.myBtn}  id="myBtn" title="Go to top">
            <img src={BackToIMG} alt="Back Img" />
        </button>
        )
}