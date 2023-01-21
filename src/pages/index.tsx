import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/MainLayout';

const Index = () => {
  return (
    <Layout>
      <div className="relative">
        <StaticImage src="../images/avo_slices_lg.jpg" alt="Slices" />
        <span className="absolute top-[30%] left-1/4">Get Fit!</span>
        <span>Healthy!</span>
        <span>Enjoy!</span>
      </div>
    </Layout>
  );
};

export default Index;
