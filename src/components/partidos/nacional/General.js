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
                  src = "../../../assets/banderas/bandera_partido_nacional.png"
                  width = {300}
                  alt= "Voto Honduras Partido Nacional"
                />
            </div>
            <div class="w-full md:w-1/2 ">
              <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Now go deeper into what your product offers. But, word it as benefits, not as features.</h2>
              <p class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
                “Save your favorites links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.
              </p>
              <ul class="usps">
                <li class="text-gray-900 py-1">
                  <strong>Sede:</strong> Comité Central del Partido Nacional, Segunda Avenida, Frente a Parque El Obelisco, Comayaguela</li>
                <li class="text-gray-900 py-1">
                  <strong> Coordinador:</strong> DAVID GUILLERMO CHÁVEZ MADISON
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