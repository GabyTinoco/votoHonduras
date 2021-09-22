import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Atlantida = () => {
  return (
        <section id="team" class="py-24 text-center">
            <div class="text-center">
                <h2 class="mb-12 section-heading wow fadeInDown animated" data-wow-delay="0.3s"> Alcaldes de Cortés</h2>
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
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT_Amelia_Maritza_Carcamo_Puerto.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p> Amelia Maritza Carcamo Puerto</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT_David_Sanin_Manaiza_Ramírez.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p> David Sanin Manaiza Ramírez</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT_Guadalupe_Trinidad_Tabora_Montoya.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p> Guadalupe Trinidad Tabora Montoya</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT_Iveth_Obdulia_Matute_Betancourth.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Iveth Obdulia Matute Betancourth</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT_Maria_Jose_Maresma_Peralta.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p> María José Maresma Peralta</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT_Onasis_Keusen_Garcia.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Onasis Keusen Garcia</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT_Osman_Alexander_Martinez_Canales.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Osman Alexander Martínez Canales</p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default Atlantida