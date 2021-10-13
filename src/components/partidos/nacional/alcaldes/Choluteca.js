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
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/APACILAGUA Presentacion Mendoza Cerrato.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Presentación Mendoza Cerrato <em>Apacigualpa</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/CHOLUTECA Oscar Abraham Argenal Espinal.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Oscar Abraham Argeñal Espinal <em>Choluteca</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/CONCEPCION DE MARIA Vilma Yamileth Ordonez Corrales.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Vilma Yamileth Ordoñez Corrales <em>Conncepción de María</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/DUYURE Celfida Amada Bustillo Cerna.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Celfida Amada Bustillo Cerna <em>Duyure</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/EL CORPUS Luis Andres Rueda Bellino.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Luis Andres Rueda Bellino <em>El Corpus</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/EL TRIUNFO Samuel Armando Ventura Martinez.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Samuel Armando Ventura Martinez <em>El triunfo</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/MARCOVIA Agustin Carcia.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Agustin Carcia <em>Marcovia</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/MOROLICA Jose Presentacion Barahona Lainez.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>José Presentación Barahona Laínez <em>Morolica</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/NAMASIGUE Jose Cirilo Garcia Abrego.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>José Cirilo García Abrego <em>Namasigue</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/OROCUINA Alejandro Jose Osorto.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p> Alejandro Jose Osorto <em>Orocuina</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/PESPIRE Hector Samuel Colindres Garcia.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Hector Samuel Colindres García <em>Pespire</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN ANTONIO DE FLORES Cesar Augusto Nunez Lagos.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Cesar Augusto Nuñez Lagos <em>San Antonio de Flores</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN ISIDRO Luis Antonio Hernandez Canales.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Luis Antonio Hernandez Canales <em>San Isidro</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN JOSE Nahum Zambrano Estrada.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Nahúm Zambrano Estrada <em>San José</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN MARCOS DE COLON Jose Douglas Ordonez Carrazco.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>José Douglas Ordoñez Carrazco <em>San Marcos de Colón</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SANTA ANA DE YUSGUARE Ruben Antonio Najar Aguilera.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Ruben Antonio Najar Aguilera <em>Santa Ana de Yusguare </em></p>
                </div>         
            </Carousel>   
        </section>
  )
}

export default Choluteca