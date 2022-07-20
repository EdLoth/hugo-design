import React from 'react';

import about from '../../../../assets/Hh.png'
import styles from './SectionDue.module.css'

function SectionDue() {
  return (
    <>
      <div className={styles.content} id="sectionDue">
        <div className={styles.container}>
          <div className={styles.section}>
              <div className="row" id="fadeIn">
                <h1 className={styles.title}>Sobre mim<div className={styles.ponto}></div></h1>
              </div>
              <div className="row fadeIn" id={styles.contentInfos}>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <p className={styles.description}>Olá, me chamo Hugo Victor, sou formado em 
                    design e atuo na área a cerca de 5 anos. <br/> <br/>
                    Desenvolvo projetos de identidade visual que 
                    auxiliam na percepção da marca perante o 
                    consumidor, aumentando a visibilidade e 
                    construindo uma relação com as pessoas. 
                    Os trabalhos são desenvolvidos com embasamento 
                    prático e teórico, com estratégias e conceitos 
                    que estão conectados com o seu propósito, afim 
                    de profissionalizar e identificar a sua empresa.</p>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6" id={styles.contentIMGhugo}>
                  <img src={about} id={styles.imgHugo} className="img-fluid" alt="" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionDue;