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
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Carlos Eduardo Cortez Gonzales ESPARTA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Carlos Eduardo Cortez Gonzáles <em>Esparta</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Gerardo Antonio Quijada Romero LA MASICA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Gerardo Antonio Quijada Romero <em>La Masica</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Mario José Meléndez Matute EL PORVENIR.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Mario José Meléndez Matute <em>El porvernir</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Martha Patricia Montes Gamez SAN FRANCISCO.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Martha Patricia Montes Gamez <em>San Francisco</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Mauricio Caliz Ceballos CEIBA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Mauricio Caliz Ceballos <em>Ceiba</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Ricardo Calix Ruiz TELA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Ricardo Calix Ruiz <em>Tela</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Santos Miguel Nataren Meléndez JUTIAPA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Santos Miguel Nataren Meléndez <em>Juatiapa</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/at/AT Wilfredo Elias Castellanos Madrid ARIZONA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Wilfredo Elias Castellanos Madrid <em>Arizona</em></p>
                </div> 
            </Carousel>   
        </section>
  )
}

export default Atlantida