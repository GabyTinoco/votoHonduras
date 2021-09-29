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
                        src = "../../../../assets/partidos/libre/diputados/fm/FM ARACELY FLORES BUESO.jpeg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>ARACELY FLORES BUESO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM CLAUDIA BERONICA MONCADA GODOY.jpeg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>CLAUDIA BERONICA MONCADA GODOY</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM DANIEL ENRIQUE ESPONDA VELASQUEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>DANIEL ENRIQUE ESPONDA VELASQUEZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM DELIA BEATRIZ VALLE MARICHAL.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>DELIA BEATRIZ VALLE MARICHAL</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM DENNIS RIGOBERTO CHIRINOS SANTOS.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>DENNIS RIGOBERTO CHIRINOS SANTOS</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM DIEGO JAVIER SANCHEZ CUEVA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>DIEGO JAVIER SANCHEZ CUEVA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM FAUSTO MANUEL CALIX MARQUEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>FAUSTO MANUEL CALIX MARQUEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM GABRIEL ZACARIAS BONILLA CARDENAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>GABRIEL ZACARIAS BONILLA CARDENAS</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM GILBERTO RIOS MUNGUIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>GILBERTO RIOS MUNGUIA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM HUGO ROLANDO NOE PINO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>HUGO ROLANDO NOE PINO</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM JARI DIXON HERRERA HERNÁNDEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>JARI DIXON HERRERA HERNÁNDEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM JORGE LUIS CALIX ESPINAL.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>JORGE LUIS CALIX ESPINAL</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM JORGE LUIS CALIX ESPINAL.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>JORGE LUIS CALIX ESPINAL</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM JUAN ALBERTO BARAHONA MEJIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>JUAN ALBERTO BARAHONA MEJIA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM LUIS ALONSO SOSA SALGADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>LUIS ALONSO SOSA SALGADO</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM MARCO ELIUD GIRON PORTILLO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>MARCO ELIUD GIRON PORTILLO</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM MARIO ORLANDO SUAZO LARA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>MARIO ORLANDO SUAZO LARA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM MIGUEL ANTONIO BRICEÑO AGURCIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>MIGUEL ANTONIO BRICEÑO AGURCIA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM PEDRO JOAQUIN AMADOR ESCALANTE.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>PEDRO JOAQUIN AMADOR ESCALANTE</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM PEDRO RAFAEL ALEGRIA MONCADA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>PEDRO RAFAEL ALEGRIA MONCADA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM RASEL ANTONIO TOME FLORES.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>RASEL ANTONIO TOME FLORES</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM SENMA JULISSA VILLANUEVA BARAHONA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>SENMA JULISSA VILLANUEVA BARAHONA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM WILMER MAREL VASQUEZ FLORENTINO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>WILMER MAREL VASQUEZ FLORENTINO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/diputados/fm/FM XIOMARA HORTENCIA ZELAYA CASTRO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>XIOMARA HORTENCIA ZELAYA CASTRO</p>
                </div>  
              
            </Carousel>   
        </section>

  )
}

export default FranciscoMorazan