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
                    <p>ADELIANO AMAYA MENDOZA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT DENIS EDGARDO RIVERA ALVARADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>DENIS EDGARDO RIVERA ALVARADO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT ENA ROSA MORAN ORTIZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>ENA ROSA MORAN ORTIZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT HAYLIN RAQUEL SUÁREZ LÓPEZ.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>HAYLIN RAQUEL SUÁREZ LÓPEZ </p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT HELIN MERARY AVILA MENDOZA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>HELIN MERARY AVILA MENDOZA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT IRIS YANETH PINEDA PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>IRIS YANETH PINEDA PAZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JACOBO RIVERA DIAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>JACOBO RIVERA DIAZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JIMMY JONATHAN SORTO PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>JIMMY JONATHAN SORTO PAZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JORGE ALBERTO BARAHONA OVIEDO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>JORGE ALBERTO BARAHONA OVIEDO</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT JOSE EDGARDO CASTRO RODRÍGUEZ.png"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>JOSE EDGARDO CASTRO RODRÍGUEZ.png</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT LINDA FRANCES DONAIRE PORTILLO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>LINDA FRANCES DONAIRE PORTILLO</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT MERCEDES GRACIELA MILLA SANCHEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>MERCEDES GRACIELA MILLA SANCHEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT NETZER EDU MEJÍA HERNÁNDEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>NETZER EDU MEJÍA HERNÁNDEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT RAMON ENRIQUE BARRIOS MALDONADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>RAMON ENRIQUE BARRIOS MALDONADO</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT SCHERLY MELISSA ARRIAGA GOMEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>SCHERLY MELISSA ARRIAGA GOMEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT SILVIA BESSY AYALA FIGUEROA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>SILVIA BESSY AYALA FIGUEROA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT WILMER ENRIQUE CRUZ PAREDES.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>WILMER ENRIQUE CRUZ PAREDES</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/cortes/CT ZOILA AMERICA COLINDRES LOPEZ .jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Cortés"
                    />
                    <p>ZOILA AMERICA COLINDRES LOPEZ </p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default Cortes