import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const General = () => {
  return (
    <section>
      <div class="features px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
            <div class="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
                <StaticImage
                  src = "../../../assets/banderas/bandera_partido_libre.jpg"
                  width = {300}
                  alt= "Voto Honduras Partido Libertad y Refundación"
                />
            </div>
            <div class="w-full md:w-1/2 ">
              <p class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
              En la actualidad el partido se caracteriza por oponerse abiertamente al neoliberalismo, privatizaciones, y la corrupción. 
                Dando su apoyo al movimiento bolivariano, el antiimperialismo, derechos de los trabajadores, salud y educación universal, 
                y en menor media, derechos LGBT. El lema de la institución es "La revolución es inevitable en Honduras", palabras escogidas 
                por el ex presidente Zelaya, quien se mantiene como líder del Frente Nacional de Resistencia Popular. 
                En sus "Declaración de Principios", Libre aboga a la refundación del Estado,
                ≪la transformación de la sociedad y del sistema económico y político, así como la construcción de una verdadera democracia 
                participativa e incluyente basada en la igualdad, la libertad, la solidaridad y la justicia con las cuales se garantice el 
                respeto universal e irrestricto de los derechos humanos;≫
              </p>
              <ul class="usps">
                <li class="text-gray-900 py-1">
                  <strong>Sede:</strong>Edificio Humuya, Ave. Sabana Tegucigalpa</li>
                <li class="text-gray-900 py-1">
                  <strong> Coordinador:</strong> José Manuel Zelaya Rosales
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default General