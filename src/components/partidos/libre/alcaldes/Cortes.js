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
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold"> Alcaldes de Cortés</h2>
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
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/CHOLOMA_ GUSTAVO ANTONIO MEJIA ESCOBAR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>GUSTAVO ANTONIO MEJIA ESCOBAR <em>CHOLOMA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/LA LIMA_ SANTOS VIRGILIO LAINEZ RODRIGUEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>SANTOS VIRGILIO LAINEZ RODRIGUEZ <em>LA LIMA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/OMOA_ NUVIA LIZZETH LOPEZ LINAREZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>NUVIA LIZZETH LOPEZ LINAREZ <em>OMOA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/PIMIENTA_ DONALDO QUIROZ BAUTISTA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>DONALDO QUIROZ BAUTISTA <em>PIMIENTA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/PROTERILLOS_ ALEX MAHOMAR REYES MENJIVAR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>ALEX MAHOMAR REYES MENJIVAR <em>PROTERILLOS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/PUERTO CORTES_ WENDY GISEEL REVELO MERAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>WENDY GISEEL REVELO MERAZ <em>PUERTO CORTES</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/SAN ANTONIO DE CORTES_ ANGEL GABRIEL PERDOMO LOPEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>ANGEL GABRIEL PERDOMO LOPEZ <em>SAN ANTONIO DE CORTÉS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/SAN FRANCISCO DE YOJOA_ CARLOS EDUARDO RODRIGUEZ SOSA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>CARLOS EDUARDO RODRIGUEZ SOSA <em>SAN FRANCISCO DE YOJOA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/SAN MANUEL_ REYNOLD ARTURO CASTRO CASTRO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>REYNOLD ARTURO CASTRO CASTRO <em>SAN MANUEL</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/SANTA CRUZ DE YOJOA_ MARLON JAVIER PINEDA LEIVA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>MARLON JAVIER PINEDA LEIVA <em>SANTA CRUZ DE YOJOA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/SPS_ OMAR MENJIVAR ROSALES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>OMAR MENJIVAR ROSALES <em>SPS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/cortes/VILLANUEVA_ CARLOS ROBERTO CARIAS ROSALES .jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Cortés"
                    />
                    <p>CARLOS ROBERTO CARIAS ROSALES <em>VILLANUEVA </em></p>
                </div>       
            </Carousel>   
        </section>

  )
}

export default Cortes