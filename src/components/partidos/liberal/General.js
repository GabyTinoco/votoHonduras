import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const General = () => {
  return (
    <section className = "hero-main">
      <div class="features px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
            <div class="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
                <StaticImage
                  src = "../../../assets/banderas/bandera_partido_liberal.png"
                  width = {300}
                  alt= "Voto Honduras Partido Liberal"
                />
            </div>
            <div class="w-full md:w-1/2 ">
              <p class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
              El partido liberal se caracterizado por guiarse por el socioliberalismo, ha promovido el desarrollo económico y el papel del estado en las regulaciones, 
              y por lo general ha tenido una postura de derechas más moderada que su contraparte nacional, siendo de mayoría de sus integrantes posicionados en la centroderecha, 
              aun muchos sin abandonar sus posturas anticomunistas y el apoyo al libre mercado, no obstante ha tenido facciones más variopintas que otros partidos 
              siendo muchos de sus miembros de posturas socialdemócratas, tras el golpe de estado de 2009 
              promovido por el ala más conservador del partido inicia el éxodo de integrantes liberales más orientados a la izquierda al partido LIBRE.
              </p>
              <ul class="usps">
                <li class="text-gray-900 py-1">
                  <strong>Sede:</strong> Consejo Central Ejecutivo del Partido Liberal, Colonia Miramontes principal esquina opuesta de Supermercados La Colonia #1.=</li>
                <li class="text-gray-900 py-1">
                  <strong> Coordinador:</strong> YANI BENJAMÍN ROSENTHAL HIDALGO 
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