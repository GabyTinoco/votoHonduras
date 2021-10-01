import React, { useState } from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/proyecciones/Hero";
import Listado from "../components/proyecciones/ListadoProyecciones"


function Encuestas() {

    return ( 
      <Layout>
          <Hero/>
          <Listado/>
      </Layout>    
      
    )
  }

 export default Encuestas;