import React from 'react';
import Layout from '../components/layout/Layout';
import HeroMain from '../components/home/Hero';
import Partidos from "../components/home/Partidos";
import Seo from "../components/SEO";

const Index = () => (
  <Layout>
    <Seo  title="Inicio" />
    <HeroMain/>
    <Partidos/>
  </Layout>
);

export default Index;
