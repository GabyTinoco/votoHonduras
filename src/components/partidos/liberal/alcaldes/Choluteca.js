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
const Choluteca = () => {
  return (
        <section id="team" class="py-24 text-center">
            <div class="text-center">
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold"> Alcaldes de Choluteca</h2>
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
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/APACILAGUA_ OSCAR CRISTIANO VARGAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Oscar Cristiano Vargas<em>Apacigualpa</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/CHOLUTECA_ CRISTOBAL JOWANY RODRIGUEZ AMADOR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Cristobal Jowany Rodriguez Amador<em>Choluteca</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/CONCEPCION DE MARIA_ JUAN TEOFILO ESPINOZA PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Juan Teófilo Espinoza Paz<em>Concepción de María</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/DUYURE_ JOSE EDGARDO CORRALES ROJAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>José Edgardo Corrales Rojas<em>Duyure</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/EL CORPUS_ RUBEN PEREZ GOMEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Rubén Pérez Gómez<em>El Corpus</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/EL TRIUNFO_ BIKI ABIGAIL OVIEDO OSABAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Biki Abigail Oviedo Osabas<em>El triunfo</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/MARCOVIA_ RUBEN VICENTE ORTIZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Rubén Vicente Ortíz<em>Marcovia</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/MOROLICA_ JUAN JOSE MARTINEZ MARTINEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Juan José Martínez Martínez<em>Morolica</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/NAMASIGUE_ SAUL SANCHEZ DIAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Saúl Sánchez Díaz<em>Namasigue</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/OROCUINA_ CRUZ REINALDO ALVAREZ LAGOS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Cruz Reinaldo Alvarez Lagos<em>Orocuina</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/PESPIRE_ ABEL ANTONIO CANALES ESPINAL.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Abel Antonio Canales Espinal<em>Pespire</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN ANTONIO DE FLORES_ DANILO ARMANDO CHAVEZ AVILA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Danilo Armando Chávez Avila<em>San Antonio de Flores</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN ISIDRO_ JOSE AVIDAIL EUCEDA BORJAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>José Avidail Euceda Borjas<em>San Isidro</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN JOSE_ IRIS JOHANA FUNES MEJIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Iris Johana Funés Mejía<em>San José</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN MARCOS DE COLON_ ELMER YOVANNI PONCE.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Elmer Yovanni Poncé<em>San Marcos de Colón</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SANTA ANA DE YUSGUARE_ NERI FERNANDO REYES PINEDA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Ruben Antonio Najar Aguilera <em>Santa Ana de Yusguare </em></p>
                </div>         
            </Carousel>   
        </section>
  )
}

export default Choluteca