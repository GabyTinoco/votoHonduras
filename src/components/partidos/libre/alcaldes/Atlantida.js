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
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold"> Alcaldes de Atlántida</h2>
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
                        src = "../../../../assets/partidos/libre/alcaldes/at/ARIZONA_ WALTER MIGUEL CASTILLO OSORIO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>WALTER MIGUEL CASTILLO OSORIO <em>ARIZONA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/at/EL PORVENIR_ LUIS ALBERTO TROCHEZ VASQUEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>LUIS ALBERTO TROCHEZ VASQUEZ <em>EL PORVENIR</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/at/ESPARTA_ NOE JAVIER VILLALTA DAVIDSON.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>NOE JAVIER VILLALTA DAVIDSON <em>ESPARTA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/at/JUTIAPA_ PEDRO ORLANDO FINO RODAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>PEDRO ORLANDO FINO RODAS<em>JUTIAPA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/at/LA CEIBA_ MARIO ROGER PEREZ TERAN.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>MARIO ROGER PEREZ TERAN <em>LA CEIBA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/at/LA MASICA_ HECTOR RAUL AMAYA SOLIS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>HECTOR RAUL AMAYA SOLIS <em>LA MASICA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/at/SAN FRANCISCO_ ENRIQUE ALEJANDRO MATUTE MEZA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>ENRIQUE ALEJANDRO MATUTE MEZA <em>SAN FRANCISCO</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/at/TELA_ ELVA NELY RUIZ INESTROZA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Atlantida"
                    />
                    <p>ELVA NELY RUIZ INESTROZA <em>TELA</em></p>
                </div> 
            </Carousel>   
        </section>
  )
}

export default Atlantida