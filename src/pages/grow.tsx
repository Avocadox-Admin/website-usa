import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import MainLayout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

const Grow = () => {
  return (
    <MainLayout>
      <PaneLayout type={'common'}>
        <div className="mt-12 max-w-7xl w-full flex flex-col">
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            How we Grow
          </div>
          <div>
            <StaticImage src="../images/aguacates_canasta.jpg" alt="Avos in basket" />
          </div>

          <div className="h-4 md:h-10 bg-lime-600"></div>
          <div>
            <StaticImage src="../images/arbol_aguacate_1.jpg" alt="tree of Avos" />
          </div>
          <div className="h-4 md:h-10 bg-lime-600"></div>
          <div>
            <StaticImage src="../images/arbol_aguacate_2.jpg" alt="tree of Avos 2" />
          </div>
          <div className="h-4 md:h-10 bg-lime-600"></div>
          <div>
            <StaticImage src="../images/huerta.jpg" alt="Orchid" />
          </div>
          <div className="h-4 md:h-10 bg-lime-600"></div>
          <div>
            <StaticImage src="../images/aguacates_verdes_mano.jpg" alt="Avos in hand" />
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default Grow;
