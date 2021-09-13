import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/Hero";
import Historia from "../components/partidos/Historia";
import Proyectos from "../components/partidos/ProyectosLey";
import SerParte from '../components/partidos/SerParte';

import Carousel from 'react-multi-carousel';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
                <Proyectos/>
                <SerParte/>
                
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
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
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {data.vacationPhotos.edges.map(image => (
                        <div class="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                           <div class="team-item">
                                <div class="team-img relative">
                                    <Img 
                                        fluid={image.node.childImageSharp.fluid}
                                        alt={image.node.base.split('-').join(' ').split('.')[0]}
                                    />        
                                </div>
                                <div class="text-center px-5 py-3">
                                    <h3 class="team-name">{image.node.base.charAt(0).toUpperCase() + image.node.base.substr(1).split('-').join(' ').split('.')[0]}</h3>
                                </div>
                            </div>    
                        </div>
                    ))} 
                </Carousel>
            </Layout>

        )}
      />
    )
  }