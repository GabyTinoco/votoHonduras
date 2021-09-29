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
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ ALEYDA XIOMARA HUETE.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> ALEYDA XIOMARA HUETE</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ ILCE BERENICE VILLATORO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> ILCE BERENICE VILLATORO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ JOSE MAURICIO MENDOZA PORTILLO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> JOSE MAURICIO MENDOZA PORTILLO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ LEONARDO RODAS CONTRERAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> LEONARDO RODAS CONTRERAS</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ LORENA MARGARITA MARTINEZ MARTINEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> LORENA MARGARITA MARTINEZ MARTINEZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ LUIS ENRIQUE ORTEGA SANCHEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> LUIS ENRIQUE ORTEGA SANCHEZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ LUIS GEOVANNY MARTINEZ SANCHEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> LUIS GEOVANNY MARTINEZ SANCHEZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ MAURICIO ORLANDO RIVERA LOPEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> MAURICIO ORLANDO RIVERA LOPEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/choluteca/CHO_ SANTOS ALBERTO OSORTO MONTOYA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Diputados Partido Libertad y Refundación Choluteca"
                    />
                    <p> SANTOS ALBERTO OSORTO MONTOYA</p>
                </div>            
            </Carousel>   
        </section>

  )
}

export default Choluteca