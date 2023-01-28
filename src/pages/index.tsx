import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

const Index = () => {
  return (
    <Layout>
      <PaneLayout type={'common'}>
        <div className="max-w-7xl">
          <StaticImage src="../images/avo_slices_lg.jpg" alt="Slices" />
          <StaticImage src="../images/avocado-g5cae18435_1920.jpg" alt="Avos" />
          <StaticImage src="../images/avocados-gdb7805e72_1920.jpg" alt="Avos tree" />
          <StaticImage src="../images/avocado-1920.jpg" alt="Avos hand" />
          <span>Healthy!</span>
          <span>Enjoy!</span>
        </div>
      </PaneLayout>
    </Layout>
  );
};

export default Index;
