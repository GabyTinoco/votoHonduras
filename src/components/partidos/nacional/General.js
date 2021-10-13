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
                  src = "../../../assets/banderas/bandera_partido_nacional.jpg"
                  width = {300}
                  alt= "Voto Honduras Partido Nacional"
                />
            </div>
            <div class="w-full md:w-1/2 ">
              <p class="text-md lg:text-lg pt-4 pb-8 text-gray-700">
              El Partido Nacional se caracteriza por ser abiertamente conservador con bastante apoyo a la iglesia, este mismo afirma tener fundamento en el humanismo cristiano. Históricamente ha tenido una postura más conservadora en lo social y anticomunista que otros partidos desde su fundación.
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