import React from 'react';

import styles from './SectionUno.module.css'

import {BsSquareFill} from 'react-icons/bs'

function SectionUno() {
  return (
    <>
      <div className={styles.content}>

      </div>
      <div className={styles.contentBG}>

        <div className={styles.container}>
          <div className={styles.contetnTitle}>
            <h1 className={styles.titleSectionUno}>
              Faça as pessoas se <span className={styles.titlemarker}>conectarem</span> com a sua <span className={styles.titlemarker}>marca</span><BsSquareFill className={styles.ponto} color={'#E7392C'} />
            </h1>
            <button className={styles.buttonFooter}>Entre em contato</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default SectionUno;