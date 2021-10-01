import React from "react"
import HeroImage from "../../svg/Encuestas";

const Encuestas = () => {
    return (
    <section className = "hero-main">
        <div className="container mx-auto px-8 lg:flex md:pt-40">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Resultados en tiempo real
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Free landing page template to promote your business startup and generate leads for the
              offered services
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