import React from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/libre/Hero";
import Historia from "../components/partidos/libre/Historia";
import Papeleta from "../components/partidos/libre/Papeleta";
import General from '../components/partidos/libre/General';


function Partidos() {

    return ( 
      <Layout>
          <Hero/>
          <Historia/>
          <General/>
          <Papeleta/>
  
    
      </Layout>    
      
    )
  }

 export default Partidos;