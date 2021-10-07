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
  
const Cortes = () => {
  return (
        <section id="team" class="py-24 text-center">
            <div class="text-center">
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Diputados de Cortés</h2>
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
                itemClass="carousel-item-padding-40-px  p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT ADELIANO AMAYA MENDOZA.jpeg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Adeliano Amaya Mendoza</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT DENIS EDGARDO RIVERA ALVARADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Denis Edgardo Rivera Alvarado</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT ENA ROSA MORAN ORTIZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Ena Rosa Moran Ortiz </p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT HAYLIN RAQUEL SUÁREZ LÓPEZ.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Haylin Raquel Suárez López </p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT HELIN MERARY AVILA MENDOZA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Helin Merary Ávila Mendoza</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT IRIS YANETH PINEDA PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Iris Yaneth Pineda Paz</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JACOBO RIVERA DIAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Jacobo Rivera Díaz</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JIMMY JONATHAN SORTO PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Jimmy Jonathan Sorto Paz</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JORGE ALBERTO BARAHONA OVIEDO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Jorge Alberto Barahona Oviedo</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JOSE EDGARDO CASTRO RODRÍGUEZ.png"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>José Edgardo Castro Rodríguez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT LINDA FRANCES DONAIRE PORTILLO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Linda Frances Donaire Portillo</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT MERCEDES GRACIELA MILLA SANCHEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Mercedes Graciela Milla Sánchez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT NETZER EDU MEJÍA HERNÁNDEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Netzer Edu Mejía Hernández</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT RAMON ENRIQUE BARRIOS MALDONADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Ramón Enrique Barrios Maldonado</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT SCHERLY MELISSA ARRIAGA GOMEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Scherly Melissa Arriaga Gómez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT SILVIA BESSY AYALA FIGUEROA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Silvia Bessy Ayala Figueroa</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT WILMER ENRIQUE CRUZ PAREDES.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Wilmer Enrique Cruz Paredes</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT ZOILA AMERICA COLINDRES LOPEZ .jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>Zoila América Colindres López </p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default Cortes