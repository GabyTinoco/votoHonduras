import React from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/psh/Hero";
import Historia from "../components/partidos/psh/Historia";
import Papeleta from "../components/partidos/psh/Papeleta";
import General from '../components/partidos/psh/General';
import Seo from "../components/SEO";

function Partidos() {

    return ( 
      <Layout>
        <Seo  title="Partido Salvador de Honduras" description = "Partido Salvador de Honduras" />
        <Hero/>
        <Historia/>
        <General/>
        <Papeleta/>
  
    
      </Layout>    
      
    )
  }

 export default Partidos;