import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/liberal/Hero";
import Historia from "../components/partidos/liberal/Historia";
import General from '../components/partidos/liberal/General';
import HeroPapeleta from '../components/partidos/liberal/Papeleta';

export default function Partidos() {
    return (
      <Layout>
                <Hero/>
                <Historia/>
                <General/>
                <HeroPapeleta/>
      </Layout> 
    )
  }

 