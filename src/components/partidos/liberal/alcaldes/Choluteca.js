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
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/APACILAGUA_ ERNESTO MENDOZA BAQUEDANO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Ernesto Mendoza Baquedano<em>Apacigualpa</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/CHOLUTECA_ QUINTIN JAVIER SORIANO PEREZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Quintin Javier Soriano Pérez<em>Choluteca</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/CONCEPCION DE MARIA_ CORDELIA AZUCENA MARTINEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>María Cordelia Azucena Martínez<em>Concepción de María</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/DUYURE_ JORGE MANRIQUE PASTRANA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Jorge Manrique Pastrana<em>Duyure</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/EL CORPUS_ ERICK BAUTISTA PERINO AGUILERA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Erick Bautista Perino Aguilera <em>El Corpus</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/EL TRIUNFO_ CRISTHIAN JOSE CASTILLO MERCADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Cristhian José Castillo Mercado <em>El Triunfo</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/MARCOVIA_ JOSE NAHUN CALIX ALVAREZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>José Nahún Calíx Alvarez <em>Marcovia</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/MOROLICA_ CARLOS RENE MARTINEZ PALMA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Carlos René Martínez Palma <em>Morolica</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/NAMASIGUE_ DOUGLAS ORESTES VICENTE JARQUIN.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Douglas Orestes Vicente Jarquín<em>Namasigue</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/OROCUINA_ ROXNY RODIL HERRERA RIOS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Roxny Rodil Herrera Ríos <em>Orocuina</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/PESPIRE_ CARLOS HUMBERTO VILLATORO GARCIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Carlos Humberto Villatoro García<em>Pespire</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN ANTONIO DE FLORES_ DARWIN BEJAMIN NUÑEZ DIAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Darwin Bejamín Nuñez Díaz<em>San Antonio de Flores</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN ISIDRO_ JOSE FRANCISCO CANALES VELASQUEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>José Francisco Canales Velasquez<em>San Isidro</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN JOSE_ HERNAN ISIDRO ORTIZ REYES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Hernán Isidro Ortíz Reyes<em>San José</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SAN MARCOS DE COLON_ VILMA SUYAPA LAGOS ELVIR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Vilma Suyapa Lagos Elvir<em>San Marcos de Colón</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/choluteca/SANTA ANA DE YUSGUAREN_ EDAS MAURICIO TURCIOS SERVELLON.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad Choluteca"
                    />
                    <p>Edas Mauricio Turcios Servellón <em>Santa Ana de Yusguare </em></p>
                </div>         
            </Carousel>   
        </section>
  )
}

export default Choluteca