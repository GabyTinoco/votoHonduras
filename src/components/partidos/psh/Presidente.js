import React from "react"
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
                  src = "../../../assets/partidos/psh/presidente.webp"
                  width = {500}
                  alt= "Voto Honduras Partido Salvador de Honduras"
                />     
            </div>
            <div class="w-full md:w-1/2 ">
              <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Salvador Alejandro César Nasralla Salum</h2>
              <div class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                <h3 class = "font-semibold"><Lugar/>Biografía</h3>
                <ul>
                  <li>Nació en la ciudad de Tegucigalpa el 30 de enero de 1953.  </li>
                </ul>
                <h3 className = "font-semibold"><Educacion/>Educación</h3>
                <ul>
                  <li>Estudió Bachiller en Ciencias y Letras en el Instituto San Francisco. </li>
                  <li>Estudió en la Pontificia Universidad Católica de Chile en 1976, donde obtuvo el titulo de Ingeniero Civil Industrial </li>
                  <li>Estudió una maestría en Administración de Empresas en la Pontificia Universidad Católica de Chile </li>

                </ul>
                <h3 className = "font-semibold"><Trabajo/>Trabajo y Carrera Política</h3>
                <ul>
                  <li>Trabajo como periodista radial en Emisoras Unidas de 1966 a 1969</li>
                  <li>En la actualidad es el director de Programa Televisivo 5 Deportivo con 40 años de continua transmisión.</li>
                  <li>Incursionó en política en 2011, participando como candidato presidencial en las elecciones de 2013 por el Partido Anticorrupción (PAC). </li>
                  <li>En 2017, fue candidato presidencial por la Alianza de Oposición contra la Dictadura</li>
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