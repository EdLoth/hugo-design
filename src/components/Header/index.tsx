import styles from './Header.module.css'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id={styles.contentNavItems}>
              <li className="nav-item"  id={styles.NavItem}>
                <Link className="nav-link active" aria-current="page" to="#">Inicio</Link>
              </li>
              <li className="nav-item"  id={styles.NavItem}>
                <a className="nav-link"  href="#sectionDue">Sobre mim</a>
              </li>
              <li className="nav-item"  id={styles.NavItem}>
                <a className="nav-link"  href="#sectionTrei">Projetos</a>
              </li>
              <li className="nav-item">
                <a target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdFrZqjr51ZymNF6IaNFNsiL27RLe2cQuBpOFudb4Cz8HkbTg/viewform?usp=sf_link" className={styles.NavButton}>
                    Entre em Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
