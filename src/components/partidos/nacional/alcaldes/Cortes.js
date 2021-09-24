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
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Armando_Calidonio_Alvarado_SPS.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Armando Calidonio Alvarado <em>SPS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Arsenio_de_Jesus_Sabillon_Pena.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Arsenio de Jesús Sabillon Peña <em>San Francisco de Yojoa</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Elmer_Adalid_Guerrrero_Lopez.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Elmer Adalid Guerrrero López <em>Puerto Cortés</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Hector_Rene_Estrada_Cruz.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Hector René Estrada Cruz <em>San Manuel</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Javier_Renan_Oyuela_Barralaga.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Javier Renan Oyuela Barralaga <em>Choloma</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Jose_Antonio_Motijno_Lopez.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>José Antonio Motiño López <em>La Lima</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Juana_Aracely_Pavon_Alcerro.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Juana Aracely Pavón Alcerro <em>Potrerillos</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Raul_Alfredo_Ligarte_Florentino.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Raul Alfredo Ligarte Florentino <em>Pimienta</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Ricardo_Alvarado_Escobar.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Ricardo Alvarado Escobar <em>Omoa</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Sandra_Isabel_Cerrato_Garcia.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Sandra Isabel Cerrato García <em>Villanueva</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Santos_Antonio_Murillo_Rivera.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Santos Antonio Murillo Rivera <em>San Antonio de Cortés</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/cortes/CT_Stephen_Michael_Zelaya_Youngberg.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                    />
                    <p>Stephen Michael Zelaya Youngberg <em>Santa Cruz DE Yojoa</em></p>
                </div>       
            </Carousel>   
        </section>

  )
}

export default Cortes