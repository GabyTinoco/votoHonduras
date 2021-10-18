import React from 'react';
import Layout from '../components/layout/Layout';
import HeroMain from '../components/home/Hero';
import Partidos from "../components/home/Partidos";
import Split from "../components/home/Split";
import Seo from "../components/SEO";

const Index = () => (
  <Layout>
    <Seo  title="Inicio" description = "Es un portal Open Source fundado por Control Hub Space cuya misión es brindarle a la ciudadanía datos transparentes, sobre procesos electorales en Honduras. Usamos un conjunto de herramientas que permiten crear proyecciones y análisis a profundidad en temas electorales en Honduras." />
    <HeroMain/>
    <Partidos/>
    <Split/>
  </Layout>
);

export default Index;
