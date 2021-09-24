import React, { useState } from "react";

import Layout from '../components/layout/Layout';
import Hero from "../components/encuentas/Hero";
import Listado from "../components/encuentas/ListadodeEncuestas"


function Encuestas() {

    return ( 
      <Layout>
          <Hero/>
          <Listado/>
      </Layout>    
      
    )
  }

 export default Encuestas;