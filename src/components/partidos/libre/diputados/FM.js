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
  
const FranciscoMorazan = () => {
  return (
        <section id="team" class="py-24 text-center">
            <div class="text-center">
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Diputados de Francisco Morazán</h2>
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
                itemClass="carousel-item-padding-40-px p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Allan Macoto.webp"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Allan Macoto</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Cesia Ortiz.webp"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Cesia Ortiz</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Cynthia Landa.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Cynthia Landa</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Daniel Flores.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Daniel Flores</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Dr Matheu.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Dr Matheu</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Francisco Flores.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Francisco Flores</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Francisco Moran.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Francisco Morán</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Guadalupe Coello.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Guadalupe Coello</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Gustavo Blanco.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Gustavo Blanco</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Iroska Elvir.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Iroska Elvir</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Isis Romero.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Isis Romero</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Jenny Pineda.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Jenny Pineda</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Ligia Ramos.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Ligia Ramos</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Madeilene Pedraza.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Madeilene Pedraza</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Moises Ulloa.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Moises Ulloa</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Molli Rubi.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Molli Rubi</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Pablo Josue Lagos.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Pablo Josue Lagos</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Roberto Paiz.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Roberto Paiz</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Ruth Medina.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Ruth Medina</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Sarahi Vasquez.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Sarahi Vasquez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Suyapa Figueroa.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Suyapa Figueroa</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Virgilio Padilla.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Virgilio Padilla</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/psh/diputados/fm/Walter Moncada.webp"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Salvador de Honduras Francisco Morazán"
                    />
                    <p>Walter Moncada</p>
                </div>
            </Carousel>   
        </section>

  )
}

export default FranciscoMorazan