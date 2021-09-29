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
                  src = "../../../assets/partidos/libre/presidente.jpg"
                  width = {500}
                  alt= "Voto Honduras Partido Libertad y Refundanción"
                />     
            </div>
            <div class="w-full md:w-1/2 ">
              <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Iris Xiomara Castro Sarmiento</h2>
              <div class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                <h3 class = "font-semibold"><Lugar/>Biografía</h3>
                <ul>
                  <li>Nació en Tegucigalpa, M.D.C. del Francisco Morazán, el 30 de septiembre de 1959.  </li>
                </ul>
                <h3 className = "font-semibold"><Educacion/>Educación</h3>
                <ul>
                  <li>Estudio en el	Instituto Hondureño de Cultura Interamericana </li>
                  <li>Estudios de Ingeniería Civil no concluidos en la UNAH</li>

                </ul>
                <h3 className = "font-semibold"><Trabajo/>Trabajo y Carrera Política</h3>
                <ul>
                  <li>Miembro activa de la Asociación de Esposas de Miembros del Rotary Club de Catacamas </li>
                  <li>Fundadora del Centro de Cuidado Diurno para Niños de Catacamas</li>
                  <li>Presidenta del organismo femenino Coppal Mujeres.</li>
                  <li>Primera dama de la república de Honduras en el periodo 2006 a 2009</li>
                  <li>Primera candidata presidencial por el Partido Libertad y Refundación en las elecciones generales de 2013.</li>
                  <li>Candidata a Designada Presidencial o Vicepresidenta Primera por la Alianza de Oposición Contra la Dictadura en 2017</li>
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