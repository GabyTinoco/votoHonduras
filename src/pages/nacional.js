import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/nacional/Hero";
import Historia from "../components/partidos/nacional/Historia";
import General from '../components/partidos/nacional/General';
import Proyectos from "../components/partidos/ProyectosLey";
import HeroPapeleta from '../components/partidos/HeroPapeleta';

import Carousel from 'react-multi-carousel';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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


export default function Partidos() {
    return (
      <StaticQuery
        query={graphql`
        query {
          vacationPhotos: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "diputados_liberal"}}, sort: {fields: base, order: ASC}) {
            edges {
              node {
                id
                base
                childImageSharp {
                  fluid( maxWidth: 1200, maxHeight: 800, fit: COVER, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        `}
        render={data => (
            <Layout>
                <Hero/>
                <Historia/>
                <General/>
                <Proyectos/>
                <HeroPapeleta/>
                <section id="team" class="py-24 text-center">
                    <div class="text-center">
                        <h2 class="mb-12 section-heading wow fadeInDown animated" data-wow-delay="0.3s">Diputados</h2>
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
                          {data.vacationPhotos.edges.map(image => (
                            <div>
                                <Img 
                                    fluid={image.node.childImageSharp.fluid}
                                    alt={image.node.base.split('-').join(' ').split('.')[0]}
                                 />
                          
                                <p>{image.node.base.charAt(0).toUpperCase() + image.node.base.substr(1).split('-').join(' ').split('.')[0]}</p>
                            </div>
                                 
                          ))} 
                            
                        </Carousel>   
                </section>
            </Layout>

        )}
      />
    )
  }

 