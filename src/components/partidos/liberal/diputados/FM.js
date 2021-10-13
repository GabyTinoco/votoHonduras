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
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={0}
                keyBoardControl={true}
                transitionDuration={1000}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM ALIA NIÑO KAFATY.jpeg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Liberal Francisco Morazán"
                    />
                    <p>ALIA NIÑO KAFATY</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM ALLAN GERARDO SALAZAR FUNEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>ALLAN GERARDO SALAZAR FUNEZ</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM BERTILA ESPINOZA SALGADO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>BERTILA ESPINOZA SALGADO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM CHRISTIAN JOSUE MARTINEZ ACOSTA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>CHRISTIAN JOSUE MARTINEZ ACOSTA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM DICLIA HERRERA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>DICLIA HERRERA</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM ELVIA DANUBIA ESPINOZA OBANDO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>ELVIA DANUBIA ESPINOZA OBANDO</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM ELVIN ERNESTO SANTOS ORDOÑEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>ELVIN ERNESTO SANTOS ORDOÑEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM EPRIL DEYCILIA HERNANDEZ PALMER.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>EPRIL DEYCILIA HERNANDEZ PALMER</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM FABIOLA CLAUDETT ABUDOJ MENA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>FABIOLA CLAUDETT ABUDOJ MENA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM HORTENCIA PATRICIA VALLE DIAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>HORTENCIA PATRICIA VALLE DIAZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM JAVIER ENRIQUE SANTOS CACERES.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>JAVIER ENRIQUE SANTOS CACERES</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM JOSE RAMON OSORIO MURILLO.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE RAMON OSORIO MURILLO</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM KELLIN LAURICIA CASTRO MARADIAGA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>KELLIN LAURICIA CASTRO MARADIAGA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM KRITZA JERLIN PEREZ GALLEGOS.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>KRITZA JERLIN PEREZ GALLEGOS</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM LARISSA IEZENIA PINEDA AGUILAR.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>LARISSA IEZENIA PINEDA AGUILAR</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM MARIA TERESA ALVAREZ VILLELA.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>MARIA TERESA ALVAREZ VILLELA</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM MARIO ENRIQUE CASTRO ORTIZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>MARIO ENRIQUE CASTRO ORTIZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM Mauricio Villeda Bermudez.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>Mauricio Villeda Bermudez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM OSMAN DANILO AGUILAR PONCE.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>OSMAN DANILO AGUILAR PONCE</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM SANTOS ELISEO CASTRO PAVON.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>SANTOS ELISEO CASTRO PAVON</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM SEYDA GEOVANY GONZALEZ HERNANDEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>SEYDA GEOVANY GONZALEZ HERNANDEZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM SOBEYDA JUDITH ANDINO ALVAREZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>SOBEYDA JUDITH ANDINO ALVAREZ</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/diputados/fm/FM TITO LIVIO SIERRA BOGRAN.jpeg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Liberal Francisco Morazán"
                    />
                    <p>TITO LIVIO SIERRA BOGRAN</p>
                </div> 
              
            </Carousel>   
        </section>

  )
}

export default FranciscoMorazan