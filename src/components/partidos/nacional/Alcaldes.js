import React, { Component} from "react"
import Cortes from "../../../svg/Cortes";
import FranciscoMorazan from "../../../svg/FranciscoMorazan";
import Atlantida from "../../../svg/Atlantida";
import Choluteca from "../../../svg/Choluteca";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { StaticImage } from "gatsby-plugin-image"

class Alcaldes extends Component {
    constructor() {
        super()
        this.state = {
            alcaldesCT: true,
            alcaldesFM: true,
            alcaldesAT: true,
            alcaldesCH: true,
        }
    }

    alcaldesCT () {
        this.setState({
            alcaldesCT: !this.state.alcaldesCT
        })
    }

  render () {
      
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

      return (
        <section className="container py-16 md:py-20 mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"> Canditados a Alcaldes</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
                <div class="shadow px-4 py-4 bg-primary-departamentos  group rounded" onClick = { () => this.alcaldesCT()}>
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <Cortes/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Cortés</h3>
                    </div>
                </div>
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded">
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <FranciscoMorazan/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Francisco Morazán</h3>
                    </div>
                </div>
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded">
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <Atlantida/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Atlántida
                        </h3>
                    </div>
                </div>
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded">
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <Choluteca/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Choluteca
                        </h3>
                    </div>
                </div>
            </div>
            { 
            !this.state.alcaldesCT?
                <section id="team" class="py-24 text-center">
                    <div class="text-center">
                        <h2 class="mb-12 section-heading wow fadeInDown animated" data-wow-delay="0.3s"> Alcaldes de Cortés</h2>
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
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div>
                            <StaticImage
                                src = "../../../assets/partidos/nacional/alcaldes/at/AT_Amelia_Maritza_Carcamo_Puerto.jpg"
                                width = {500}
                                alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                            />
                            <p> Amelia Maritza Carcamo Puerto</p>
                        </div>
                        <div>
                            <StaticImage
                                src = "../../../assets/partidos/nacional/alcaldes/at/AT_David_Sanin_Manaiza_Ramírez.jpg"
                                width = {500}
                                alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                            />
                            <p> David Sanin Manaiza Ramírez</p>
                        </div>
                        <div>
                            <StaticImage
                                src = "../../../assets/partidos/nacional/alcaldes/at/AT_Guadalupe Trinidad_Tabora_Montoya.jpg"
                                width = {500}
                                alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                            />
                            <p> Guadalupe Trinidad Tabora Montoya</p>
                        </div>
                        <div>
                            <StaticImage
                                src = "../../../assets/partidos/nacional/alcaldes/at/AT_Iveth_Obdulia_Matute_Betancourth.jpg"
                                width = {500}
                                alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                            />
                            <p>Iveth Obdulia Matute Betancourth</p>
                        </div>
                        <div>
                            <StaticImage
                                src = "../../../assets/partidos/nacional/alcaldes/at/AT_María_José_Maresma_Peralta.jpg"
                                width = {500}
                                alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                            />
                            <p> María José Maresma Peralta</p>
                        </div>
                        <div>
                            <StaticImage
                                src = "../../../assets/partidos/nacional/alcaldes/at/AT_Onasis_Keusen_Garcia.jpg"
                                width = {500}
                                alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                            />
                            <p>Onasis Keusen Garcia</p>
                        </div>
                        <div>
                            <StaticImage
                                src = "../../../assets/partidos/nacional/alcaldes/at/AT_Osman_ Alexander_Martínez_Canales.jpg"
                                width = {500}
                                alt= "Voto Honduras Alcaldes Partido Nacional Cortés"
                            />
                            <p> Osman Alexander Martínez Canales</p>
                        </div> 
                    </Carousel>   
                </section>
              : null
            }
        </section>
         
      )
  }
}

export default Alcaldes