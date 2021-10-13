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
                autoPlaySpeed={500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px p-4"
            >
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Cristobal_Rubius_Zabala_CURAREN.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Cristobal Rubius Zabala <em>Curaren</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_German_Rafael_Diaz_Avila_SABANAGRANDE.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>German Rafael Diaz Ávila <em>Sabanagrande</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Oscar_Arnulfo_Fiallos_Maradiaga_ALUBAREN.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Oscar Arnulfo Fiallos Maradiaga <em>Alubaren</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Adalberto_Catalino_Ramos_Cardona_MARALE.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Adalberto Catalino Ramos Cardona <em>Marale</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Andres_Abelina_Servellon_Lagos_LEPATERIQUE.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Andrés Abelina Servellon Lagos <em>Lepaterique</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Angel_Rafael_Aguilar_Gonzales_OJOJONA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Angel Rafael Aguilar Gonzáles <em>Ojojona</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_David_Guillermo_Chavez Madison_DISTRITO_CENTRAL.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>David Guillermo Chávez Madison <em> Distrito Central</em></p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Digna_Italia_Ruiz_Gonzales_SAN_ANTONIO_DE_ORIENTE.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Digna Italia Ruiz Gonzáles <em>San Antonio de Oriente</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Enayuda_Pamela_Zavala_Herrera_ORICA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Enayuda Pamela Zavala Herrera <em>Orica</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Felicito_Funez_Rubi_SAN_MIGUELITO.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Felicito Funez Rubi <em> San Miguelito</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Feliz_Adrian_Alvarenga_Villalta_MARAITA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Feliz Adrian Alvarenga Villalta <em>Maraita</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Gerson_Isaac_Rivera_Arias_SAN_IGNACIO.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Gerson Isaac Rivera Arias <em> San Ignacio</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Hugo_Eleazar_Flores_Valladares_VALLECILLOS.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Hugo Eleazar Flores Valladares <em>Vallecillos</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Jaime_Orlando_Andino_Castillo_SAN_ BUENAVENTURA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Jaime Orlando Andino Castillo <em>San Buenaventura</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Jose_Adan_ Sierra_Castro_LA_VENTA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>José Adan Sierra Castro <em>La Venta</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM José Luis Ponce Lazo SANTA ANA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>José Luis Ponce Lazo <em>Santa Ana </em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Juan Ramón Peréz Rodas REITOCA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Juan Ramón Peréz Rodas <em>Reitoca</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Juan Ramón Salgado Henriquez VILLA SAN FRANCISCO.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Juan Ramón Salgado Henriquez <em>Villa San Francisco</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Julio Antonio Ávilez Moncada SANTA LUCIA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Julio Antonio Ávilez Moncada <em>Santa Lucía</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Lilian Ramona Morazán Garcia EL PORVENIR.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Lilian Ramona Morazán Garcia <em>El Porvenir</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Marco Tulio Carrasco Martínez CEDROS.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Marco Tulio Carrasco Martínez <em>Cedros</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Marco Tulio Martínez Casco TATUMBLA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Marco Tulio Martínez Casco <em>Tatumbla</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Marlin Luis Barahona López NUEVA ARMENIA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Marlin Luis Barahona López <em>Nueva Armenia</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Nelson René Chávez Hernández GUAIMACA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Nelson René Chávez Hernández <em>Guaimaca</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Norlan David Medina Alonzo CANTARRANAS.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Norlan David Medina Alonzo <em>Cantarranas</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Roosevelt Eduardo Áviles Santos TALANGA.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Roosevelt Eduardo Áviles Santos <em>Talanga</em></p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM Wilfredo Ponce Ponce VALE DE ANGELES.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Wilfredo Ponce Ponce <em>Valle de ángeles</em></p>
                </div> 
              
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/alcaldes/fm/FM_Wilson_Nehemias_Oyuela Maldonado_LA LIBERTAD.jpg"
                        width = {500}
                        alt= "Voto Honduras Alcaldes Partido Nacional Francisco Morazán"
                    />
                    <p>Wilson Nehemias Oyuela Maldonado <em>La Libertad</em></p>
                </div> 
              
            </Carousel>   
        </section>

  )
}

export default FranciscoMorazan