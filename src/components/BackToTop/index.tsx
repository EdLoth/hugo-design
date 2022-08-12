import React from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';


import styles from './Back.module.css'

export function BackToTop() {

    function teste(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    return(
        <button onClick={teste} className={styles.myBtn}  id="myBtn" title="Go to top">
            <img src="https://media.graphassets.com/W28NN8djSmi908Nu7ixQ" alt="Back Img" />
        </button>
        )
}