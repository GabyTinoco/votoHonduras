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
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/APACILAGUA Presentacion Mendoza Cerrato.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Presentación Mendoza Cerrato <em>APACILAGUA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/CHOLUTECA Oscar Abraham Argenal Espinal.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Oscar Abraham Argeñal Espinal <em>CHOLUTECA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/CONCEPCION DE MARIA Vilma Yamileth Ordonez Corrales.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Vilma Yamileth Ordoñez Corrales <em>CONCEPCIÓN DE MARÍA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/DUYURE Celfida Amada Bustillo Cerna.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Celfida Amada Bustillo Cerna <em>DUYURE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/EL CORPUS Luis Andres Rueda Bellino.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Luis Andres Rueda Bellino <em>EL CORPUS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/EL TRIUNFO Samuel Armando Ventura Martinez.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Samuel Armando Ventura Martinez <em>EL TRIUNFO</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/MARCOVIA Agustin Carcia.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Agustin Carcia <em>MARCOVIA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/MOROLICA Jose Presentacion Barahona Lainez.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>José Presentación Barahona Laínez <em>MOROLICA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/NAMASIGUE Jose Cirilo Garcia Abrego.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>José Cirilo García Abrego <em>NAMASIGUE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/OROCUINA Alejandro Jose Osorto.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p> Alejandro Jose Osorto <em>OROCUINA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/PESPIRE Hector Samuel Colindres Garcia.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Hector Samuel Colindres García <em>PESPIRE</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN ANTONIO DE FLORES Cesar Augusto Nunez Lagos.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Cesar Augusto Nuñez Lagos <em>SAN ANTONIO DE FLORES</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN ISIDRO Luis Antonio Hernandez Canales.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Luis Antonio Hernandez Canales <em>SAN ISIDRO</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN JOSE Nahum Zambrano Estrada.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Nahúm Zambrano Estrada <em>SAN JOSÉ</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SAN MARCOS DE COLON Jose Douglas Ordonez Carrazco.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>José Douglas Ordoñez Carrazco <em>SAN MARCOS DE COLÓN</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/choluteca/SANTA ANA DE YUSGUARE Ruben Antonio Najar Aguilera.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Choluteca"
                    />
                    <p>Ruben Antonio Najar Aguilera <em>SANTA ANA DE YUSGUARE </em></p>
                </div>         
            </Carousel>   
        </section>
  )
}

export default Choluteca