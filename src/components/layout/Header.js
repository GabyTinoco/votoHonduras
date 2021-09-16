import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from 'react';
import Backdrop from './BackdropSection';
import { StaticImage } from "gatsby-plugin-image"
import "../../css/custom.scss";


const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let navClasses = 'nav-links';
  let navItemClasses = 'nav-link-item';
  let burgerClass = "burger";
  let backdropClass = "backdrop";
  if (isOpen) {
    navClasses = 'nav-links nav-active';
    navItemClasses = 'nav-link-item-active';
    burgerClass = "burger toggle";
    backdropClass = "backdrop backdrop-active";

  }

  return (
    <header>
      <Backdrop activeClass={backdropClass} click={toggle} />
      <nav className="navbar">
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/" >
                <div className="logo-image"></div>     
              </Link>
            </h4>
          </div>

          <ul className={navClasses}>
            <Link activeClass="active"to="/">Inicio</Link>
            <Link activeClass="active"to="partidos">Partidos</Link>
            <Link activeClass="active"to="mapa">Mapa</Link>
            <Link activeClass="active"to="encuestas">Encuestas</Link>
            <Link activeClass="active"to="proyecciones">Proyecciones</Link>
            <Link activeClass="active"to="noticias">Noticias</Link>
          </ul>
          <div className={burgerClass} onClick={toggle}>
            <div className="burger-line-1"></div>
            <div className="burger-line-2"></div>
            <div className="burger-line-3"></div>
          </div>
        </div>
      </nav>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;



