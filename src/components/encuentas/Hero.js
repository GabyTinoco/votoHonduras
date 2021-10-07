import React from "react"
import HeroImage from "../../svg/Encuestas";
import { Link } from "gatsby";
const Encuestas = () => {
    return (
    <section className = "hero-main">
        <div className="container mx-auto px-8 lg:flex md:pt-40">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Resultados del proceso electoral 2021
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
            Nuestra publicaciones de encuestas son tomadas de nuestros afiliados &nbsp;
            <Link activeClass="active"to="honduencuestas.com" target = "_blank" >honduencuestas.com
          </Link> los cuales recolectan datos de manera masiva a
            nivel nacional, Honduencuestas tiene como fin poder trazar un mapa territorial de posicionamiento basado en el comportamiento, 
            decisión y afiliación política del electorado digital.
            </p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage/>
          </div>
        </div>
    </section>
    )
}

export default Encuestas