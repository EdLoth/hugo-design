import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../../assets/projects/001.png'
import img2 from '../../../../assets/projects/002.png'
import img3 from '../../../../assets/projects/003.png'
import img4 from '../../../../assets/projects/004.png'
import img5 from '../../../../assets/projects/005.png'
import img6 from '../../../../assets/projects/006.png'


import styles from './SectionTrei.module.css'

function SectionTrei() {
  return (
    <>
      <div className={styles.content} id="sectionTrei">
        <div className={styles.container}>
          <div className={styles.section}>
            <div>
              <h1 className={styles.title}>Projetos<div className={styles.ponto}></div></h1>
            </div>
            <div id={styles.contentInfos}>
              <div className={styles.cotentImages}>



              

                <Link className={styles.card} to="/projects/hugo">
                  <div>
                    <img className='img-fluid' src={img2} alt="" />
                  </div>
                </Link>

                  <Link className={styles.card} to="/projects/ramos">
                  <div >
                    <img className='img-fluid' src={img1} alt="" />
                  </div>
                </Link>
                
                <Link className={styles.card} to="/projects/vita">
                  <div>
                    <img className='img-fluid' src={img3} alt="" />
                  </div>
                </Link>

                <Link className={styles.card} to="/projects/vogar">
                  <div>
                    <img className='img-fluid' src={img4} alt="" />
                  </div>
                </Link>
                <Link className={styles.card} to="/projects/rec">
                  <div>
                    <img className='img-fluid' src={img5} alt="" />
                  </div>
                </Link>
                <Link className={styles.card} to="/projects/lane">
                  <div>
                    <img className='img-fluid' src={img6} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTrei;
