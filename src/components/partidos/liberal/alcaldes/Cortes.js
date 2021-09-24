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
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/SPS_ JOSE ANTONIO RIVERA MATUTE.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>JOSE ANTONIO RIVERA MATUTE<em>SPS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/SAN FRANCISCO DE YOJOA_ GLORIA PATRICIA PINEDA LEIVA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>GLORIA PATRICIA PINEDA LEIVA<em>San Francisco de Yojoa</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/PUERTO CORTES_ MARIA LUISA MARTELL CANIZALES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>MARIA LUISA MARTELL CANIZALES<em>Puerto Cortés</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/SAN MANUEL_ MARCIO ARMANDO AMADOR GUTIERREZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>MARCIO ARMANDO AMADOR GUTIERREZ<em>San Manuel</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/CHOLOMA_ LEOPOLDO EUGENIO CRIVELLI DURANT.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>Javier Renan Oyuela Barralaga <em>Choloma</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/LA LIMA_ ASTOR ADOLFO AMAYA FUENTES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>ASTOR ADOLFO AMAYA FUENTES <em>La Lima</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/POTRERILLOS_ CARLOS NOE RIVERA MANZANARES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>CARLOS NOE RIVERA MANZANARES<em>Potrerillos</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/PIMIENTA_ OSCAR ARMANDO PEREZ PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>OSCAR ARMANDO PEREZ PAZ <em>Pimienta</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/OMOA_ JUNIOR EDGARDO MADRID MURCIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>JUNIOR EDGARDO MADRID MURCIA <em>Omoa</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/VILLANUEVA_ WALTER SMELIN PERDOMO AGUILAR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>WALTER SMELIN PERDOMO AGUILAR <em>Villanueva</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/SAN ANTONIO DE CORTES_ JESUS EDUARDO NUÑEZ SERRANO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>JESUS EDUARDO NUÑEZ SERRANO<em>San Antonio de Cortés</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/cortes/SANTA CRUZ DE YOJOA_ ROBERTO PINEDA CHACON.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Cortés"
                    />
                    <p>ROBERTO PINEDA CHACON <em>Santa Cruz DE Yojoa</em></p>
                </div>       
            </Carousel>   
        </section>

  )
}

export default Cortes