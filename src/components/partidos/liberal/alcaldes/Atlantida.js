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
                autoPlaySpeed={0}
                keyBoardControl={true}
                transitionDuration={1000}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/ARIZONA_CARLOS ARNALDO CHACON MENCIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p> CARLOS ARNALDO CHACON MENCIA <em>ARIZONA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/EL PORVENIR_ SERGIO MEDINA VILLALTA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>SERGIO MEDINA VILLALTA <em>EL PORVENIR</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/ESPARTA_EDGARDO RAMIREZ ROMERO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>EDGARDO RAMIREZ ROMERO<em>ESPARTA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/JUTIAPA_ OSCAR ARNULFO AYALA BAUTISTA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>OSCAR ARNULFO AYALA BAUTISTA<em>JUTIAPA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/LA CEIBA_ BADER ABRAHAM DIP ALVARADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>BADER ABRAHAM DIP ALVARADO <em>LA CEIBA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/LA MASICA_ OVIDIO NAUN TURCIOS CALIDONIO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>OVIDIO NAUN TURCIOS CALIDONIO <em>LA MASICA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/SAN FRANCISCO_CARLOS ALBERTO BARDALES MORADEL.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>CARLOS ALBERTO BARDALES MORADEL<em>SAN FRANCISCO</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/at/TELA_ JOSE ANTONIO FUENTES POSAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>JOSE ANTONIO FUENTES POSAS <em>TELA</em></p>
                </div> 
            </Carousel>   
        </section>
  )
}

export default Atlantida