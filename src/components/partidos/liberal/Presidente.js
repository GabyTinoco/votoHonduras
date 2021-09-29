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
    <section className = "presidente">
      <div className="features px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16">
            <div class="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
              <StaticImage
                  src = "../../../assets/partidos/liberal/presidente_yani.jpg"
                  width = {500}
                  alt= "Voto Honduras Partido Liberal Presidente"
                />     
            </div>
            <div class="w-full md:w-1/2 ">
              <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Yani Rosenthal</h2>
              <div class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                <h3><Lugar/>Biografía</h3>
                <ul>
                  <li>Nació en San Pedro Sula del departamento de Cortés, 14 de julio de 1965 </li>
                </ul>
                <h3><Educacion/>Educación</h3>
                <ul>
                  <li>Graduado en la escuela bilingüe Escuela Internacional Sampedrana en San Pedro Sula</li>
                  <li>Se graduó de abogado de la Universidad Nacional Autónoma de Honduras </li>
                  <li>Realizó su máster en Administración de Empresas en INCAE</li>
                  <li>En 1998 la Suprema Corte de Justicia le da el título de notario público.</li>
                </ul>
                <h3><Trabajo/>Trabajo</h3>
                <ul>
                  <li>En 1998 la Suprema Corte de Justicia le da el título de notario público.</li>
                </ul>
                
              </div>
            
            </div>      
          </div>
        
        </div>

      </div>

    </section>
  
  )
}

export default Presidente