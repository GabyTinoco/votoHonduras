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
                itemClass="carousel-item-padding-40-px p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT CLARA EUGENIA FLORES SANCHEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>CLARA EUGENIA FLORES SANCHEZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT ENRIQUE ALEJANDRO MATUTE DIAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>ENRIQUE ALEJANDRO MATUTE DIAZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT ILSA LORENA TORRES MATAMORES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>ILSA LORENA TORRES MATAMORES</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT JIMNA ARELI SILIEZAR SEVILLA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>JIMNA ARELI SILIEZAR SEVILLA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT JOSE ANIBAL RODRIGUEZ MILLA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>JOSE ANIBAL RODRIGUEZ MILLA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT MARGARITA DABDOUB SIKAFFI.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>MARGARITA DABDOUB SIKAFFI</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT OSCAR ARIEL MONTOYA RODEZNO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>OSCAR ARIEL MONTOYA RODEZNO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/at/AT PAVEL ALBERTO NAJARRO GONZALES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Atlantida"
                    />
                    <p>PAVEL ALBERTO NAJARRO GONZALES</p>
                </div>  
            </Carousel>   
        </section>

  )
}

export default Atlantida