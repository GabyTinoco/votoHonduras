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
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold"> Diputados de Choluteca</h2>
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
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ ADAN ANTONIO CARRASCO PEREZ.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>ADAN ANTONIO CARRASCO PEREZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ ALEX REMBERTO ORDOÑEZ ORDOÑEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>ALEX REMBERTO ORDOÑEZ ORDOÑEZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ AMILCAR REINALDO RIVAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>AMILCAR REINALDO RIVAS</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ CARLOS LENIN MARTINEZ SANDOVAL.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>CARLOS LENIN MARTINEZ SANDOVAL</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ ERNESTO SALOMON LEZAMA DAVILA .jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>ERNESTO SALOMON LEZAMA DAVILA </p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ SANDRA RAQUEL ROJAS AVILA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>SANDRA RAQUEL ROJAS AVILA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ SUANY BETZABE AMADOR BONILLA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>SUANY BETZABE AMADOR BONILLA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_ YURI CRISTHIAN SABAS GUTIERREZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>YURI CRISTHIAN SABAS GUTIERREZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/choluteca/CHO_MENFFIS SAMANTHA VALLADARES SANCHEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Liberal Choluteca"
                    />
                    <p>CHO_MENFFIS SAMANTHA VALLADARES SANCHEZ</p>
                </div>
            </Carousel>   
        </section>

  )
}

export default Choluteca