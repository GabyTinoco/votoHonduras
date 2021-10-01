import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from 'react';
import Backdrop from './BackdropSection';
import { StaticImage } from "gatsby-plugin-image"
import "../../css/custom.scss";


const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

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
                  <StaticImage
                      src = "../../assets/voto_honduras.png"
                      width = {150}
                      alt= "Voto Honduras"
                  />
              </Link>
            </h4>
          </div>
          <ul className={navClasses}>
            <Link activeClass="active"to="/">Inicio</Link>
            <Link activeClass="active"to="/partidos" 
              onMouseEnter = { () => setIsShownHoverContent(true)}
             >
               Partidos
            </Link> 
             {isShownHoverContent && (
                 <ul onMouseLeave = { () => setIsShownHoverContent(false)}>
                  <Link activeClass="active"to="/nacional">Partido Nacional</Link>
                  <Link activeClass="active"to="/liberal">Partido Liberal</Link>
                  <Link activeClass="active"to="/libre">Partido Libre</Link>
                  <Link activeClass="active"to="/psh">Partido PSH</Link>
                 </ul>
              )}
            
            <Link activeClass="active"to="/encuestas" target = "_blank" >Encuestas</Link>
            <Link activeClass="active"to="/noticias">Noticias</Link>
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



