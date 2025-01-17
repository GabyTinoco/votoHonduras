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
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Ada_Maria_Mejía_Signorelli.jpg"
                        width = {500}
                        alt= "Voto Honduras diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Ada Maria Mejía Signorelli</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Ana_Regina_Sánchez_Andino.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Ana Regina Sánchez Andino</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Antonio_Cesar_Rivera_Callejas.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Antonio Cesar Rivera Callejas</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Blas_Orlando_Ramos_Ramírez.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Blas Orlando Ramos Ramírez</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Ebal_Jair_Diaz_Lupian.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Ebal Jair Díaz Lupian</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Eduardo_Bennet.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Eduardo Bennet</p>
                </div>
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Elba_Mariela_Escobar_Elvir.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Elba Mariela Escobar Elvir</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM_Feliz_Arturo_Alonzo_Matute.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Feliz Arturo Alonzo Matute</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Gloria Florinda Ordoñez Yanes.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Gloria Florinda Ordoñez Yanes</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Johana Guicel Bermudez Lacayo.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Johana Guicel Bermudez Lacayo</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Jorge Alberto Zelaya Munguía.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Jorge Alberto Zelaya Munguía</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM José Jesús Villanueva Maradiaga.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>José Jesús Villanueva Maradiagas</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM José Oswaldo Ramos Soto.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>José Oswaldo Ramos Soto</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Karla Yadira Rosales Pavón.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Karla Yadira Rosales Pavón</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Leana Rebeca Martínez Cáceres.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Leana Rebeca Martínez Cáceres</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Lissi Marcela Matute Cano.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Lissi Marcela Matute Cano</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Luis Fernando Pinel Sierra.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>Luis Fernando Pinel Sierra</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Maria Antonieta Mejia Sanchez.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>María Antonieta Mejía Sánchez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Maria Jose Espinoza Lopez.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>María José Espinoza López</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Pedro Antonio Chávez Madison.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>FM Pedro Antonio Chávez Madison</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Rossel Renan Inestroza Martinez.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>FM Rossel Renán Inestroza Martínez</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Santos Orlando Morazán Ponce.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>FM Santos Orlando Morazán Ponce</p>
                </div> 
                <div>
                    <StaticImage
                        src = "../../../../assets/partidos/nacional/diputados/francisco_morazan/FM Waleska Marlene Zelaya Portillo.jpg"
                        width = {500}
                        alt= "Voto Honduras/diputados Partido Nacional Francisco Morazán"
                    />
                    <p>FM Waleska Marlene Zelaya Portillo</p>
                </div> 
              
            </Carousel>   
        </section>

  )
}

export default FranciscoMorazan