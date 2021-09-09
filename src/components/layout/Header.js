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
    <header className="sticky top-0 bg-white shadow">
      <Backdrop activeClass={backdropClass} click={toggle} />
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
          <div className="flex items-center text-2xl">
            <StaticImage
                src = "../../img/voto_honduras.png"
                width = {150}
                alt= "Voto Honduras"
            />
          </div>
          <div className="flex mt-4 sm:mt-0">
            <ul className={navClasses}>
              <Link className="px-4" to="/">Inicio</Link>
              <Link className="px-4" to = "/">Partidos</Link>
              <Link className= "px-4" to = "/">Mapa</Link>
              <Link className= "px-4" to = "/">Noticias</Link>
              <Link className= "px-4" to = "/">Encuestas</Link>
              <Link className= "px-4" to = "/">Proyecciones</Link>
            </ul>
            <div className={burgerClass} onClick={toggle}>
              <div className="burger-line-1"></div>
              <div className="burger-line-2"></div>
              <div className="burger-line-3"></div>
            </div>
          </div>
        </div>
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



