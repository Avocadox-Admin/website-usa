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
          <div className="grid md:grid-cols-2">
            <StaticImage src="../images/arbol_aguacate_2.jpg" alt="tree of Avos 2" />
            <div className="flex flex-col justify-center text-lg py-6 px-10">
              Avocado trees require moderately deep soil, since they have shallow roots. Avocado
              produces abundant crops in soils 30 to 40 cm deep. pH and salinity. Regarding the
              issue of pH, the avocado optimally takes nutrients between the values ​​of 5.5 to 7.0.
            </div>
          </div>
          <div className="h-4 md:h-10 bg-lime-600"></div>
          <div className="grid md:grid-cols-2">
            <StaticImage src="../images/huerta.jpg" alt="Orchid" />
            <div className="flex flex-col justify-center text-lg py-6 px-10">
              Hass avocado trees, like some other cultivars, may only bear well every other year.
              After a year with low yield, often because of cold, for which the tree does not have
              much tolerance, yields may be very high the next year. However, the heavy crop can
              deplete stored carbohydrates, lowering the following season's yield and this can set
              the tree into a lifelong alternate bearing pattern. The perfect conditions are in the
              land of MICHOACAN were our major production areas are established.
            </div>
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default Grow;
