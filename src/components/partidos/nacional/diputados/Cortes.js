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
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Alberto_Chedrani_Castañeda.jpg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Nacional Cortés"
                    />
                    <p> Alberto Chedrani Castañeda</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Cinthya_Dayanara_Hawit_Flores.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Cinthya Dayanara Hawit Flores</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Daisy_Maria_Andonie_López.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Daisy María Andonie López</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Edwar_Samir_Molina_Fúnez.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Edwar Samir Molina Fúnez</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Giberto_Jeronimo_Yearwood.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Gilberto Jerónimo Yearwood</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Guillermo_Alberto_Bogran_Castro.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Guillermo Alberto Bográn Castro</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Ingvar_Onassis_López_Hernández.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Ingvar Onassis López Hernández</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Jaime_Enrique_Villegas_Roura.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Jaime Enrique Villegas Roura</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Jeanmy_Daniela_Machigua_Guillen.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Jeanmy Daniela Machigua Guillen</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Johanna_Goretty_Costa_Arita.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p> Johanna Goretty Costa Arita</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_José_Jaar_Mudenat.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>José Jaar Mudenat</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Laura_Patricia_Enamorado_Solis.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Laura Patricia Enamorado Solís</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Laura_Patricia_Erazo_Pineda.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Laura Patricia Erazo Pineda</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Leda_Lizethe_Garcia_Pagan.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Leda Lizethe Garcia Pagan</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Marlen_Nohemi_Matamoros_Flores.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Marlen Nohemí Matamoros Flores</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Marnie_Menardi_Marconi.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Marnie Menardi Marconi</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Norma_Amparo_Cardona_Oviedo.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Norma Amparo Cardona Oviedo</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Reynaldo_Geovanny_Ekonomo_Fúnez.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Reynaldo Geovanny Ekonomo Fúnez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Marlen_Nohemi_Matamoros_Flores.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Walton Ebanks Stanley Centine</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/cortes/CT_Marlen_Nohemi_Matamoros_Flores.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Cortés"
                    />
                    <p>Yaudet Burbara Canahuati</p>
                </div> 
            </Carousel>   
        </section>

  )
}

export default Cortes