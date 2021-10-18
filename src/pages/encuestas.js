import React, { useState } from "react";
import Seo from "../components/SEO";
import Layout from '../components/layout/Layout';
import Hero from "../components/encuentas/Hero";
import Disponibles from "../components/encuentas/Disponibles"

function Encuestas() {

    return ( 
      <Layout>
          <Seo title = "Encuestas Voto Honduras" description = "Publicaciones de encuestas tomadas de HonduEncuestas "/>
          <Hero/>
          <Disponibles/>
      </Layout>    
      
    )
  }

 export default Encuestas;