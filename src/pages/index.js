import React from 'react';
import Layout from '../components/layout/Layout';
import HeroMain from '../components/home/Hero';
import Split from '../components/home/Split';
import Partidos from "../components/home/Partidos";


const Index = () => (
  <Layout>
    <HeroMain/>
    <Partidos/>
    <Split/>
  </Layout>
);

export default Index;
