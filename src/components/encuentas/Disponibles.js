import React from "react"
import { Link } from "gatsby";
import EncuestaSVG from "../../svg/ListadoEncuesta";

import SplitSection from '../SplitSection';
const Disponibles = () => {
    return (
      <section>
      <div className="container mx-auto lg:flex">
          <SplitSection
            id="services"
            primarySlot={
              <div className="lg:pr-32 xl:pr-48">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none">¡Listado de encuestas activas para participar !</h2>
                <div className="mt-8 mb-8 text-xl font-light leading-relaxed">
                  <ul>
                  <Link activeClass="active"to="honduencuestas.com" target = "_blank" >¡Muy pronto!</Link>
                  </ul>
                </div>
              </div>
            }
        
            secondarySlot={<EncuestaSVG/>}
          />
      </div>
      </section>
    )
}

export default Disponibles