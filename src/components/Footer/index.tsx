import React from 'react';

import {RiWhatsappFill} from 'react-icons/ri'

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
                      <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdFrZqjr51ZymNF6IaNFNsiL27RLe2cQuBpOFudb4Cz8HkbTg/viewform?usp=sf_link" className={styles.buttonFooter}>Entre em contato</a>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-6 all-end">
                    <div className={styles.contentButtons}>
                    <a target="blank" href="https://api.whatsapp.com/send?phone=5571981068058&text=Ol%C3%A1%2C%20tudo%20bem%3F" className={styles.buttonFooterSocialWhapp}>
                      <RiWhatsappFill size={26} color={'#FFF'} />
                    </a>
                    <a target="blank" href="https://www.linkedin.com/in/hugo-victor-9713081b1/" className={styles.buttonFooterSocial}>
                      <img src={linked}  alt="linkedin contact" />
                    </a>
                    <a target="blank" href="https://www.instagram.com/hugovictordesign/" className={styles.buttonFooterSocial}>
                      <img src={insta}  alt="insta  contact" />
                    </a>
                    <a target="blank" href="http://behance.net/victormtz46cd" className={styles.buttonFooterSocial}>
                      <img src={behance}  alt="behance  contact" />
                    </a>
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