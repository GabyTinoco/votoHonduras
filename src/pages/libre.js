import React from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/libre/Hero";
import Historia from "../components/partidos/libre/Historia";
import Papeleta from "../components/partidos/libre/Papeleta";
import General from '../components/partidos/libre/General';
import Seo from "../components/SEO";

function Partidos() {

    return ( 
      <Layout>
        <Seo  title="Partido Libertad y Refundación" />
        <Hero/>
        <Historia/>
        <General/>
        <Papeleta/>
  
      </Layout>    
      
    )
  }

 export default Partidos;