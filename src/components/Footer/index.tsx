import React from 'react';

import insta from '../../assets/insta.png';
import linked from '../../assets/linke.png';
import behance from '../../assets/behance.png';

import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.section}>
              <div className="row" id={styles.infoFooter}>
                <div className="col-xs-12 col-md-6 col-lg-6">
                <h1 className={styles.title}>Vamos trabalhar<br/> juntos?</h1>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <p className={styles.description}>
                  Você pode me encontrar nas redes sociais ou clicando no botão abaixo para fazer seu orçamento.
                  </p>
                  <div className="row" id={styles.contentRowButtons}>
                    <div className="col-xs-12 col-md-6 col-lg-6 all-start">
                      <button className={styles.buttonFooter}>Entre em contato</button>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-6 all-end">
                    <div className={styles.contentButtons}>
                    <button className={styles.buttonFooterSocial}>
                      <img src={linked}  alt="linkedin contact" />
                    </button>
                    <button className={styles.buttonFooterSocial}>
                      <img src={insta}  alt="insta  contact" />
                    </button>
                    <button className={styles.buttonFooterSocial}>
                      <img src={behance}  alt="behance  contact" />
                    </button>

                  </div>
                    </div>
                  </div>
                 
                </div>
              
              </div>
              <div className="corpright">
                <h1 className={styles.titleCorp}>
                © 2022 Todos os direitos reservados - Hugo Victor.
                </h1>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;