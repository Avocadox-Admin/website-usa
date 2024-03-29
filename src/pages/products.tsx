import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import MainLayout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

const Products = () => {
  return (
    <MainLayout>
      <PaneLayout type={'common'}>
        <div className="mt-12 max-w-7xl w-full">
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            Our Products
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center">
              <h2>Fresh Avocado</h2>
              <StaticImage src="../images/aguacates_fondo_azul.jpg" alt="Avos en arbol" />
            </div>
            <div className="flex flex-col items-center">
              <h2>PULP & Guacamole</h2>
              <StaticImage src="../images/avo_pulp.jpeg" alt="Avo Pulp" className="md:w-48"/>
            </div>
            <div className="flex flex-col items-center">
              <h2>Oil</h2>
              <StaticImage src="../images/avocado_oil.jpeg" alt="Avo oil" className='md:w-48' />
            </div>
          </div>
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            Packing House
          </div>
          <div>
            <StaticImage src="../images/export_sizes.png" alt="Sizes" />
          </div>
          <div>
            <StaticImage src="../images/pallets.jpg" alt="Pallets" />
          </div>
          <div>
            <StaticImage src="../images/pallets_aguacate.jpg" alt="Pallets avos" />
          </div>
          <div>
            <StaticImage src="../images/camara_frio.jpg" alt="Cold Chamber" />
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default Products;
