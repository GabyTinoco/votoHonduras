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
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/APACILAGUA_ OSCAR CRISTIANO VARGAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>OSCAR CRISTIANO VARGAS <em>APACILAGUA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/CHOLUTECA_ CRISTOBAL JOWANY RODRIGUEZ AMADOR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>CRISTOBAL JOWANY RODRIGUEZ AMADOR <em>CHOLUTECA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/CONCEPCION DE MARIA_ JUAN TEOFILO ESPINOZA PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>JUAN TEOFILO ESPINOZA PAZ<em>CONCEPCIÓN DE MARÍA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/DUYURE_ JOSE EDGARDO CORRALES ROJAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>JOSE EDGARDO CORRALES ROJAS<em>DUYURE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/EL CORPUS_ RUBEN PEREZ GOMEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>RUBEN PEREZ GOMEZ<em>EL CORPUS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/EL TRIUNFO_ BIKI ABIGAIL OVIEDO OSABAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>BIKI ABIGAIL OVIEDO OSABAS<em>EL TRIUNFO</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/MARCOVIA_ RUBEN VICENTE ORTIZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>MARCOVIA_ RUBEN VICENTE ORTIZ <em>MARCOVIA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/MOROLICA_ JUAN JOSE MARTINEZ MARTINEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>JUAN JOSE MARTINEZ MARTINEZ <em>MOROLICA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/NAMASIGUE_ SAUL SANCHEZ DIAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>AUL SANCHEZ DIAZ <em>NAMASIGUE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/OROCUINA_ CRUZ REINALDO ALVAREZ LAGOS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>CRUZ REINALDO ALVAREZ LAGOS <em>OROCUINA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/PESPIRE_ ABEL ANTONIO CANALES ESPINAL.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>ABEL ANTONIO CANALES ESPINAL <em>PESPIRE</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/SAN ANTONIO DE FLORES_ DANILO ARMANDO CHAVEZ AVILA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>DANILO ARMANDO CHAVEZ AVILA <em>SAN ANTONIO DE FLORES</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/SAN ISIDRO_ JOSE AVIDAIL EUCEDA BORJAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>SAN ISIDRO_ JOSE AVIDAIL EUCEDA BORJAS</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/SAN JOSE_ IRIS JOHANA FUNES MEJIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>IRIS JOHANA FUNES MEJIA <em>SAN JOSE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/SAN MARCOS DE COLON_ ELMER YOVANNI PONCE.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>ELMER YOVANNI PONCE <em>SAN MARCOS DE COLON</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/choluteca/SANTA ANA DE YUSGUARE_ NERI FERNANDO REYES PINEDA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Choluteca"
                    />
                    <p>NERI FERNANDO REYES PINEDA <em>SANTA ANA DE YUSGUARE</em></p>
                </div>          
            </Carousel>   
        </section>
  )
}

export default Choluteca