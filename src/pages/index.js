import React from 'react';
import Layout from '../components/layout/Layout';
import HeroMain from '../components/home/Hero';
import Split from '../components/home/Split';
import Partidos from "../components/home/Partidos";
import Cta from "../components/home/Cta";


const Index = () => (
  <Layout>
    <HeroMain/>
    <Partidos/>
    <Split/>
  
    
    <Cta/>
  </Layout>
);

export default Index;
