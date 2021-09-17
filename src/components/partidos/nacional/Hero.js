import React from "react"
import PeopleVoting from "../../../svg/Partidos/PartidoNacional";
import Button from '../../Button';
import { Link } from "gatsby";

const Hero = () => {
  return (
    <section className = "hero-main">
      <div class="pt-5">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 class="my-4 text-5xl font-bold leading-tight">Partido Nacional</h1>
            <p class="leading-normal text-2xl mb-8">Justicia social con libertad y democracia</p>
            <Link  to="https://partidonacional.hn/contactanos/" target= "_blank">
              <Button size="xl">Se parte</Button>
            </Link>
          </div>
          <div class="w-full md:w-3/5 py-6 text-center">
            <PeopleVoting/>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Hero