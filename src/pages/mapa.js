import React, { useState } from "react";
import Seo from "../components/SEO";
import Layout from '../components/layout/Layout';
import Hero from "../components/mapa/Hero";
import Listado from "../components/mapa/ListadoMapa"


function MapaSentimientos() {

    return ( 
      <Layout>
        <Seo title = "Mapa de Sentimientos" description = "Aceptación digital y las tendencias políticas de los candidatos  basadas en big data y encuestas"/>
        <Hero/>
        <Listado/>
      </Layout>    
      
    )
  }

 export default MapaSentimientos;