import React from "react"
import Button from '../Button';
import HeroImage from "../../svg/Vote.js";
const Hero = () => {
    return (
    <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Main title of your landing page
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Free landing page template to promote your business startup and generate leads for the
              offered services
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">Get Started</Button>
            </p>
            <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
          </div>
          <div className="lg:w-1/2">
            <HeroImage/>
          </div>
        </div>
    </section>
    )
}

export default Hero