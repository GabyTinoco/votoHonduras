import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const General = () => {
  return (
    <section id = "presidente">
      <div class="features px-4 md:px-8">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
            <div class="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
                <StaticImage
                  src = "../../../assets/banderas/bandera_partido_salvador.jpg"
                  width = {300}
                  alt= "Voto Honduras Partido Salvador de Honduras"
                />
            </div>
            <div class="w-full md:w-1/2 ">
              <p class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
              Es un partido político hondureño de centroderecha, con un programa basado en la lucha contra la corrupción, y la impunidad. 
              Es un partido populista que busca unión y apoyo de todos los espectros de la política y sociedad hondureñ
              </p>
              <ul class="usps">
                <li class="text-gray-900 py-1">
                  <strong>Sede:</strong>Tegucigalpa</li>
                <li class="text-gray-900 py-1">
                  <strong> Coordinador:</strong> Pedro Barquero
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