import React from 'react';

import styles from './SectionDue.module.css'

import img from '../../../assets/projects/Rect.png'

function SectionDue() {
  return (
    <>
      <div className={styles.content} id="sectionDue">
        <div className={styles.container}>
          <div className={styles.section}>

            <div className="row fadeIn" id={styles.contentInfos}>           
              <div className="col-xs-12 col-md-6 col-lg-6">
              <h1 className={styles.title}>Vogar<div className={styles.ponto}></div></h1>
              <h2 className={styles.subtitle}>IDENTIDADE VISUAL</h2>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-6">
                <p className={styles.description}>
                  Olá, me chamo Hugo Victor. Sou formado
                   em Design e atuo na área a cerca de 5 
                   anos,entretanto, tenho me dedicado a 
                   trabalhar com marcas e projetos de identidade 
                   visual, na qual venho me especializando a 
                   3 anos.
                </p>

                <div className="row" id={styles.contentImages}>
                  <img src={img} className="img-fluid" id={styles.imgProjects} alt="" />
                  <img src={img} className="img-fluid" id={styles.imgProjectsDiff} alt="" />
                  <img src={img} className="img-fluid" id={styles.imgProjects} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default SectionDue;