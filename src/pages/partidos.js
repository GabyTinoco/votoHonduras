import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from "../components/partidos/Hero";
import Historia from "../components/partidos/Historia";
import Proyectos from "../components/partidos/ProyectosLey";

const Partidos = () => (
    <Layout>
        <Hero/>
        <Historia/>
        <Proyectos/>
    </Layout>
);
export default Partidos;