import React from "react"
import PeopleVoting from "../../../svg/Partidos/PartidoNacional";
import Button from '../../Button';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Lugar from "../../../svg/Lugar";
import Trabajo from "../../../svg/Trabajo";
import Educacion from "../../../svg/Educacion";

const Presidente = () => {
  return (
    <section>
      <div className="features px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
            <div class="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
              <StaticImage
                  src = "../../../assets/partidos/nacional/presidente.jpeg"
                  width = {500}
                  alt= "Voto Honduras Partido Nacional"
                />     
            </div>
            <div class="w-full md:w-1/2 ">
              <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Nasry Asfura</h2>
              <div class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
              </div>
            
            </div>


          
          </div>
        
        </div>

      </div>

    </section>
  
  )
}

export default Presidente