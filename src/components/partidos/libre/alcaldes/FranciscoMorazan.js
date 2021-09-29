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
                itemClass="carousel-item-padding-40-px  p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/ALUBAREN_ REINA ORTENCIA RIVAS CRUZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación Francisco Morazán"
                    />
                    <p>REINA ORTENCIA RIVAS CRUZ <em>ALUBAREN</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/CANTARRANAS_ LUIS ALFONSO REYES AGUILAR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>LUIS ALFONSO REYES AGUILAR <em>CANTARRANAS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/CEDROS_ EDWIN YOHAN CRUZ GONZALES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>EDWIN YOHAN CRUZ GONZALES <em>CEDROS</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/CURAREN_ KELVIN RUBERLI MOLINA UMANZOR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>KELVIN RUBERLI MOLINA UMANZOR <em>CURAREN</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/DISTRITO CENTRAL_ JORGE ALEJANDRO ALDANA BARDALES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>JORGE ALEJANDRO ALDANA BARDALES <em>DISTRITO CENTRAL</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/EL PORVENIR_ JOSE LUIS RUBI ACOSTA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>JOSE LUIS RUBI ACOSTA <em>EL PORVENIR</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/GUAIMACA_ JOSE DAVID ARTEAGA CHICAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>JOSE DAVID ARTEAGA CHICAS <em>GUAIMACA</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/LA LIBERTAD_ JOSE IVAN IZAGUIRRE VASQUES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>JOSE IVAN IZAGUIRRE VASQUES <em>LA LIBERTAD</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/LA VENTA_ MALCOLM GIOVANNI SANCHEZ ALEMAN.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>MALCOLM GIOVANNI SANCHEZ ALEMAN <em>LA LIBERTAD</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/LEPATERIQUE_ OSCAR JAVIER ORELLANA LOPEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>OSCAR JAVIER ORELLANA LOPEZ <em>LEPATERIQUE</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/MARAITA_ ALICIA ARABELLA ROBLES LAINEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>ALICIA ARABELLA ROBLES LAINEZ <em>MARAITA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/MARALE_ EDWIN OTILIO MONTES MATUTE.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>EDWIN OTILIO MONTES MATUTE <em>MARALE</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/NUEVA ARMENIA_ WILFREDO ANTONIO PADILLA AGUILAR.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>WILFREDO ANTONIO PADILLA AGUILAR <em>NUEVA ARMENIA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/OJOJONA_ JOSE MANUEL MONTOYA MEJIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>JOSE MANUEL MONTOYA MEJIA <em>OJOJONA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/ORICA_ CELEO FILANDER FERRERA FLORES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>CELEO FILANDER FERRERA FLORES <em>ORICA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/REITOCA_ MARBIN YOVANI HERRERA EUCEDA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>MARBIN YOVANI HERRERA EUCEDA <em>REITOCA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/SABANAGRANDE_ CESAR AUGUSTO DIAZ FLORES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>CESAR AUGUSTO DIAZ FLORES<em>SABANAGRANDE</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/SAN ANTONIO_ JUAN CARLOS FLORES CASTELLON.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>JUAN CARLOS FLORES CASTELLON<em>SAN ANTONIO</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/SAN BUENA AVENTURA_ PAULINO SALOMON ELVIR ANDINO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>PAULINO SALOMON ELVIR ANDINO <em>SAN BUENA AVENTURA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/SAN IGNACIO_ BESSY AGAPITA CABRERA ERAZO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>BESSY AGAPITA CABRERA ERAZO <em>SAN IGNACIO</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/SAN MIGUELITO_ ANA JULIA BUSTILLO.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>ANA JULIA BUSTILLO<em>SAN MIGUELITO</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/SANTA ANA_ ZACARIAS PORTILLO RODAS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>ZACARIAS PORTILLO RODAS <em>SANTA ANA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/SANTA LUCIA_ LUIS EDUARDO VARELA GOMEZ.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>LUIS EDUARDO VARELA GOMEZ <em>SANTA LUCIA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/TALANGA_ MARIO ANTONIO MONCADA GODOY.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p> MARIO ANTONIO MONCADA GODOY <em>TALANGA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/TATUMBLA_ PEDRO ANTONIO RAMOS RAMOS.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>PEDRO ANTONIO RAMOS RAMOS <em>TATUMBLA</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/VALLE DE ANGELES_ GLENDA MARIBEL GUEVARA FUNES.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>GLENDA MARIBEL GUEVARA FUNES <em>VALLE DE ANGELES</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/VALLECILLOS_ SELVIN ADALID JUANEZ GARCIA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>SELVIN ADALID JUANEZ GARCIA <em>VALLECILLOS</em></p>
                </div> 
              
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/libre/alcaldes/fm/VILLA SAN FRANCISCO_ JOSE DAN JUNIOR PONCE MONCADA.jpeg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Libertad y Refundación  Francisco Morazán"
                    />
                    <p>JOSE DAN JUNIOR PONCE MONCADA <em>VILLA SAN FRANCISCO</em></p>
                </div> 
              
            </Carousel>   
        </section>

  )
}

export default FranciscoMorazan