import React from "react"
import Button from '../Button';
import HeroImage from "../../svg/Vote.js";
const Hero = () => {
    return (
    <section className = "hero-main">
        <div className="container mx-auto px-8 lg:flex md:pt-40">
          <div className="text-center lg:text-left lg:w-1/2 p-20">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Voto Honduras 
            </h1>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none sub-title">Por un proceso electoral transparente</h2>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Es un portal Open Source fundado por Control Hub Space cuya misión es brindarle a la ciudadanía datos transparentes, 
              sobre procesos electorales en Honduras. Usamos un conjunto de herramientas que permiten crear proyecciones 
              y análisis a profundidad en temas electorales en Honduras.
            </p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage/>
          </div>
        </div>
    </section>
    )
}

export default Hero