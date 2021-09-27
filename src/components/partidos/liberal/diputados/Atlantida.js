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
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Carla Belinda Dip Alvarado.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p>Carla Belinda Dip Alvarado</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Emiliani Antonio Ponce Castillo.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p>Emiliani Antonio Ponce Castillo</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Habivi Eunice Alonso Aleman.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p>Habivi Eunice Alonso Aleman</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Jade Cristal Rubi Rodas.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p>Jade Cristal Rubi Rodas</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Jose Martin Cardona Canales.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p> Jose Martin Cardona Canales</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Luis Enriques Fuentes Morales.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p>Luis Enriques Fuentes Morales</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Mario Emilio Becerra Lopez.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p>Mario Emilio Becerra Lopez</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/at/AT Nancy Viviana Zapata Moncada.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Atlantida"
                    />
                    <p>Nancy Viviana Zapata Moncada</p>
                </div>  
            </Carousel>   
        </section>

  )
}

export default Atlantida