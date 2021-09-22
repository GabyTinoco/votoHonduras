import React from "react"
import { SticImage } from "gsby-plugin-image"
const atlantida = () => {
  return (
        <section id="team" class="py-24 text-center">
            <div class="text-center">
                <h2 class="mb-12 section-heading wow fadeInDown animed" da-wow-delay="0.3s">Diputados de Atlantida</h2>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDurion={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <SticImage
                        src = "../../../../assets/partidos/nacional/diputados/atlantida/AT_Amelia_Maritza_Carcamo_Puerto.jpg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Nacional Atlantida"
                    />
                    <p>Amelia Maritza Carcamo Puerto </p>
                </div>
                <div>
                    <SticImage
                        src = "../../../../assets/partidos/nacional/diputados/atlantida/AT_David_Sanin_Manaiza_Ramírez.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Atlantida"
                    />
                    <p>David Sanin Manaiza Ramírez</p>
                </div>
                <div>
                    <SticImage
                        src = "../../../../assets/partidos/nacional/diputados/atlantida/AT_Guadalupe_Trinidad_Tabora_Montoya.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Atlantida"
                    />
                    <p>Guadalupe Trinidad Tabora Montoya</p>
                </div>
                <div>
                    <SticImage
                        src = "../../../../assets/partidos/nacional/diputados/atlantida/AT_Iveth_Obdulia_Matute_Betancourth.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Atlantida"
                    />
                    <p>Iveth Obdulia Matute Betancourth</p>
                </div>
                <div>
                    <SticImage
                        src = "../../../../assets/partidos/nacional/diputados/atlantida/AT_María_José_Maresma_Peralta.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Atlantida"
                    />
                    <p>María José Maresma Peralta</p>
                </div>
                <div>
                    <SticImage
                        src = "../../../../assets/partidos/nacional/diputados/atlantida/AT_Onasis_Keusen_Garcia.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Atlantida"
                    />
                    <p>Onasis Keusen Garcia</p>
                </div>
                <div>
                    <SticImage
                        src = "../../../../assets/partidos/nacional/diputados/atlantida/AT_Osman_Alexander_Martínez_Canales.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Atlantida"
                    />
                    <p>Osman Alexander Martínez Canales</p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default atlantida