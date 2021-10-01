import React from 'react';
import Layout from '../components/layout/Layout';
import Partidos from "../components/home/Partidos";
import Seo from "../components/SEO";

const Index = () => (
  <Layout>
    <Seo  title="Partidos Político de Honduras" />
    <Partidos/>
  </Layout>
);

export default Index;
