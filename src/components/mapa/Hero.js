import React from "react"
import HeroImage from "../../svg/MapaSentimientos";
import { Link } from "gatsby";
const MapaSentimientos = () => {
    return (
    <section className = "hero-main" id = "home-main-hero" >
        <div className="container mx-auto px-8 lg:flex md:pt-40">
          <div className="text-center lg:text-left lg:w-1/2 contenedor">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Mapa de Sentimientos
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
             Explora la aceptación digital y las tendencias políticas de los candidatos  basadas en big data, encuestas 
             e información de elecciones anteriores que nos ayudarán a tener un mapa de calor o de interacción por partidos, 
             candidatos o movimientos.
            </p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage/>
          </div>
        </div>
    </section>
    )
}

export default MapaSentimientos