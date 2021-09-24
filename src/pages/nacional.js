import React, { useState } from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/nacional/Hero";
import Historia from "../components/partidos/nacional/Historia";
import General from '../components/partidos/nacional/General';
import Proyectos from "../components/partidos/ProyectosLey";
import Papeleta from "../components/partidos/nacional/Papeleta";

function Partidos() {

    return ( 
      <Layout>
          <Hero/>
          <Historia/>
          <General/>
          <Proyectos/>
          <Papeleta/>
      </Layout>    
      
    )
  }

 export default Partidos;