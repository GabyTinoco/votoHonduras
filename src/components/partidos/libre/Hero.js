import React from "react"
import PeopleVoting from "../../../svg/Partidos/Libre";
import { Link } from "gatsby";
import Button from '../../Button';

const Hero = () => {
  return (
    <section class="">
      <div class="pt-5">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 class="my-4 text-5xl font-bold leading-tight">Partido Libertad y Refundación</h1>
            <p class="leading-normal text-2xl mb-8">La revolución es inevitable en Honduras</p>
              <Link  to="https://www.partidoliberal.hn/afiliate/" target= "_blank">
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