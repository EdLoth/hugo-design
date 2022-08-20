import styles from './Header.module.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import {AiFillCloseCircle} from 'react-icons/ai'

export default function Header() {
  return (
    <>
      <nav className="navbar fadeIn navbar-expand-lg fixed-top navbar-dark" id={styles.Navbar}>
        <div className={styles.containerNavbar}>
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              className={styles.logo}
              alt=" of the author"
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-body">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
              <AiFillCloseCircle size={36} color={'#FFF'} />
            </button>
              <ul className="navbar-nav" id={styles.contentNavItems}>
                <li className="nav-item" id={styles.NavItem}>
                  <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item" id={styles.NavItem}>
                  <a className="nav-link" href="#sectionDue">Sobre mim</a>
                </li>
                <li className="nav-item" id={styles.NavItem}>
                  <a className="nav-link" href="#sectionTrei">Projetos</a>
                </li>
                <li className="nav-item">
                  <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdFrZqjr51ZymNF6IaNFNsiL27RLe2cQuBpOFudb4Cz8HkbTg/viewform?usp=sf_link" className={styles.NavButton}>
                    Entre em Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
