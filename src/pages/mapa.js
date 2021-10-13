import React, { useState } from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/mapa/Hero";
import Listado from "../components/mapa/ListadoMapa"


function MapaSentimientos() {

    return ( 
      <Layout>
          <Hero/>
          <Listado/>
      </Layout>    
      
    )
  }

 export default MapaSentimientos;