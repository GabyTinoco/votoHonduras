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
    <section class="container py-16 md:py-20 mx-auto" id="diputadosLiberal">
       <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Candidato Presidencial</h1>
    <section className = "presidente">
      <div className="features px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16">
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
                <h3><Lugar/>Biografía</h3>
                <ul>
                  <li>Nació en Tegucigalpa, M.D.C. del departamento de Francisco Morazán, el 8 de junio de 1958. </li>
                </ul>
                <h3><Educacion/>Educación</h3>
                <ul>
                  <li>Graduado de Bachillerato en el Instituto San Francisco</li>
                  <li>Estudios de Ingeniería Civil no concluidos en la UNAH</li>

                </ul>
                <h3><Trabajo/>Trabajo</h3>
                <ul>
                  <li>Político y empresario</li>
                  
                </ul>
                
              </div>
            
            </div>


          
          </div>
        
        </div>

      </div>

    </section>
    </section>
  
  )
}

export default Presidente