import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import MainLayout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

const Recipes = () => {
  return (
    <MainLayout>
      <PaneLayout type={'common'}>
        <div className="mt-12 max-w-7xl w-full">
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            Recipes
          </div>
          <div>
            <StaticImage src="../images/aguacate_medio_tabla.jpg" alt="Avos on table" />
          </div>
          <div>
            <StaticImage src="../images/guacamole_aguacate.jpg" alt="Guacamole" />
          </div>
          <div>
            <StaticImage src="../images/avocado-gd7269fd06_1920.jpg" alt="Avos tajin" />
          </div>
          <div>
            <StaticImage src="../images/aguacates_guacamole.jpg" alt="Avos and guacamole" />
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default Recipes;
