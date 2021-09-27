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
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Carlos Roberto Ledezma Casco.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Carlos Roberto Ledezma Casco</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Edgardo Hernan Loucel Aguilera.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Edgardo Hernan Loucel Aguilera</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Emilio Miguel Antonio Farach Simon.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Emilio Miguel Antonio Farach Simon</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Francis Yolanda Argeñal Echenique.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Francis Yolanda Argeñal Echenique</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Juan Carlos Oliva Brizio.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p> Juan Carlos Oliva Brizio</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Nataly Elizabeth Barahona Solorzano.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Nataly Elizabeth Barahona Solorzano</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Selvin Ramon Rueda Rueda.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Selvin Ramón Rueda Rueda.</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Selvin Ramon Rueda Rueda.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Selvin Ramón Rueda Rueda.</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Suany Yolanda Nunez Lagos.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Suany Yolanda Nuñez Lagos</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/choluteca/CHO Thania Lorena Mayorga Lainez.jpg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Nacional Choluteca"
                    />
                    <p>Thania Lorena Mayorga Lainez</p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default Choluteca