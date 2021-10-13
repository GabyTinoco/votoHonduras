import React, { useState } from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/encuentas/Hero";
import Disponibles from "../components/encuentas/Disponibles"

function Encuestas() {

    return ( 
      <Layout>
          <Hero/>
          <Disponibles/>
      </Layout>    
      
    )
  }

 export default Encuestas;