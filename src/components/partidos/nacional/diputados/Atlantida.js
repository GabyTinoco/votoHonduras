import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Atlantida = () => {
  return (
        <section id="team" class="py-24 text-center">
            <div class="text-center">
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold"> Diputados de Atlántida</h2>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/at/AT_Amelia_Maritza_Carcamo_Puerto.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Atlantida"
                    />
                    <p> Amelia Maritza Carcamo Puerto</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/at/AT_David_Sanin_Manaiza_Ramírez.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Atlantida"
                    />
                    <p> David Sanin Manaiza Ramírez</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/at/AT_Guadalupe_Trinidad_Tabora_Montoya.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Atlantida"
                    />
                    <p> Guadalupe Trinidad Tabora Montoya</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/at/AT_Iveth_Obdulia_Matute_Betancourth.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Atlantida"
                    />
                    <p>Iveth Obdulia Matute Betancourth</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/at/AT_Maria_Jose_Maresma_Peralta.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Atlantida"
                    />
                    <p> María José Maresma Peralta</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/at/AT_Onasis_Keusen_Garcia.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Atlantida"
                    />
                    <p>Onasis Keusen Garcia</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/at/AT_Osman_Alexander_Martinez_Canales.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Atlantida"
                    />
                    <p>Osman Alexander Martínez Canales</p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default Atlantida