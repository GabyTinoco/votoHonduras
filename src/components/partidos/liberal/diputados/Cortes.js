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
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Agustin Guerrero Bernandez.jpeg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Liberal Cortés"
                    />
                    <p> Agustin Guerrero Bernandez</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Ana Rosa Cartagena Cabrera.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Ana Rosa Cartagena Cabrera</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Angel Eduardo Ramos Salinas.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Angel Eduardo Ramos Salinas</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT CLAUDIA IVETH AMAYA MARTEL.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>CLAUDIA IVETH AMAYA MARTEL</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Elisa Margarita Gomez Castro.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Elisa Margarita Gomez Castro</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Etny Simei Uyoa Martinez.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Etny Simei Uyoa Martinez</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Gloria Carolina Milian Velasquez.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Gloria Carolina Milian Velasquez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Harry Stephen Panting Zelaya.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Harry Stephen Panting Zelaya</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Jacobo Roberto Sanchez Martinez.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Jacobo Roberto Sanchez Martinez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Johny Armando Ortiz Rosa.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p> Johny Armando Ortiz Rosa</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Juan Carlos Avila Pacheco.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Juan Carlos Avila Pacheco</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Kathia Marcela Crivelli Ramirez.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Kathia Marcela Crivelli Ramirez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Marlon Guillermo Lara Orellana.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Marlon Guillermo Lara Orellana</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Moises Canelas Withol.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Moises Canelas Withol</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Pedro Luis Garcia Canaca.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Pedro Luis Garcia Canaca</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Sandra Tatiana Hernández Cuevas.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Sandra Tatiana Hernández Cuevas</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Sebastiana Arriola Guity.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Sebastiana Arriola Guity</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Sofia Michelle Canahuati Mejia.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Sofia Michelle Canahuati Mejia</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/cortes/CT Suyapa Melissa Mejía Menendez.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Cortés"
                    />
                    <p>Suyapa Melissa Mejía Menendez</p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default Cortes