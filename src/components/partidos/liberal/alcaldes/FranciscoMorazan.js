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
                <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold"> Alcaldes de Francisco Morazán</h2>
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
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/CURAREN_ JOSE ENRIQUE PACHECO PAZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE ENRIQUE PACHECO PAZ <em>CURAREN</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/SABANAGRANDE_ JUAN DE LA CRUZ ZELAYA SIERRA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JUAN DE LA CRUZ ZELAYA SIERRA <em>SABANAGRANDE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/ALUBAREN_ JOSE LUIS CHEVEZ MENDOZA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE LUIS CHEVEZ MENDOZA<em> ALUBAREN</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/MARALE_ JUAN SANTIAGO CHAVEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JUAN SANTIAGO CHAVEZ <em>MARALE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/LEPATERIQUE_ HENRY GEOVANY MEJIA CHEVEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>HENRY GEOVANY MEJIA CHEVEZ <em> LEPATERIQUE</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/OJOJONA_ JOSE ARMANDO GARCIA ANDINO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE ARMANDO GARCIA ANDINO<em> OJOJONA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/FM JOSE EDUARDO MARTELL CASTRO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE EDUARDO MARTELL CASTRO <em> DISTRITO CENTRAL</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/SAN ANTONIO DE ORIENTE_ MANUEL ANTONIO MARADIAGA SANCHEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>MANUEL ANTONIO MARADIAGA SANCHEZ<em>SAN ANTONIO DE ORIENTE</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/ORICA_ REINA GABRIELA COELLO LICONA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>REINA GABRIELA COELLO LICONA<em>ORICA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/SAN MIGUELITO_ MARVIN ALBERTO MATAMOROS POSADAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>MARVIN ALBERTO MATAMOROS POSADAS<em> SAN MIGUELITO</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/MARAITA_ MOISES ANTONIO VARGAS FLORES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>MOISES ANTONIO VARGAS FLORES <em>MARAITA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/SAN IGNACIO_ RIGOBERTO LOPEZ ESCOBER.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>RIGOBERTO LOPEZ ESCOBER<em> SAN IGNACIO</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/VALLECILLOS_ CELY MODESTO ZAVALA MARADIAGA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>CELY MODESTO ZAVALA MARADIAGA <em>VALLECILLOS</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/SAN BUENAAVENTURA_ JOSE ANDRES AMADOR FLORES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE ANDRES AMADOR FLORES <em>SAN BUENAVENTURA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/LA VENTA_ JOSE MAURICIO MEZA ORDOÑEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE MAURICIO MEZA ORDOÑEZ<em>LA VENTA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/SANTA ANA_ JORGE ALBERTO SANDRES GARCIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JORGE ALBERTO SANDRES GARCIA<em>SANTA ANA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/REITOCA_ MARLON NEPTHALI OSORTO CHEVEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>MARLON NEPTHALI OSORTO CHEVEZ <em>REITOCA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/VILLA SAN FRANCISCO_ JANIO ROLANDO BORJAS OCHOA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JANIO ROLANDO BORJAS OCHOA <em>VILLA SAN FRANCISCO.</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/SANTA LUCIA_ GIOVANNI RIVERA BOCOCK.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>GIOVANNI RIVERA BOCOCK <em>SANTA LUCIA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/EL PORVENIR_ MAGLI NOELL ESCOTO RODRIGUEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>MAGLI NOELL ESCOTO RODRIGUEZ<em>EL PORVENIR</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/CEDROS_ DAVID CASTRO SUAREZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>DAVID CASTRO SUAREZ<em>CEDROS</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/TATUMBLA_ JOSE ROBERTO LICONA SUAZO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JOSE ROBERTO LICONA SUAZO <em>TATUMBLA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/NUEVA ARMENIA_ CARLOS ANDRES ORDOÑEZ BARAHONA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>CARLOS ANDRES ORDOÑEZ BARAHONA <em>NUEVA ARMENIA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/GUIMACA_ HENRY ARMANDO RAUDALES PERALTA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>HENRY ARMANDO RAUDALES PERALTA<em>GUAIMACA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/CANTARRANAS_ FRANCISCO GAITAN AGUERO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>FRANCISCO GAITAN AGUERO <em>CANTARRANAS</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/TALANGA_ RUDY GUSTAVO MANUEL BANEGAS LIZARDO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>RUDY GUSTAVO MANUEL BANEGAS LIZARDOg <em>TALANGA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/VALLE DE ANGELES_ JESUS JAVIER CABRERA REYES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>JESUS JAVIER CABRERA REYESg<em>VALE DE ANGELES</em></p>
                </div> 
              
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/liberal/alcaldes/fm/LA LIBERTAD_ HEVIS HARABIT MONTES IZAGUIRRE.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Liberal Francisco Morazán"
                    />
                    <p>HEVIS HARABIT MONTES IZAGUIRRE<em>LA LIBERTAD</em></p>
                </div> 
              
            </Carousel>   
        </section>

  )
}

export default FranciscoMorazan