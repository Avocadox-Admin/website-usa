import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import MainLayout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

const galleryImages = [
  {
    alt: 'Avos bg Brown',
    path: '../images/aguacate_bg_cafe.jpg'
  },
  {
    alt: 'Avos bg Dark',
    path: '../images/aguacate_bg_obscuro.jpg'
  },
  {
    alt: 'Avos two halfs',
    path: '../images/aguacate_dos_mitades.jpg'
  }
];

const Gallery = () => {
  return (
    <MainLayout>
      <PaneLayout type={'common'}>
        <div className="mt-12 max-w-7xl w-full">
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            Gallery
          </div>
          <div className="grid md:grid-cols-3">
            <div>
              <StaticImage src="../images/aguacate_bg_cafe.jpg" alt="Avos bg Brown" />
            </div>
            <div>
              <StaticImage src="../images/aguacate_bg_obscuro.jpg" alt="Avos bg Dark" />
            </div>
            <div>
              <StaticImage src="../images/aguacate_dos_mitades.jpg" alt="Avos two halves" className="max-h-60" />
            </div>
            <div>
              <StaticImage src="../images/aguacate_hoja.jpg" alt="Avos whth leave" className="max-h-60" />
            </div>
            <div>
              <StaticImage src="../images/aguacate_medio_tabla.jpg" alt="Avos table" />
            </div>
            <div>
              <StaticImage src="../images/aguacate_mitad_bg_claro.jpg" alt="Avos bg white" />
            </div>
            <div>
              <StaticImage src="../images/aguacate_mitad_fondo_aguacates.jpg" alt="Avos bg white" className="max-h-60" />
            </div>
            <div>
              <StaticImage src="../images/aguacate_mitad.jpg" alt="Avos bg white" />
            </div>
            <div>
              <StaticImage src="../images/aguacates_agua.jpg" alt="Avos bg white" />
            </div>
            <div>
              <StaticImage src="../images/aguacates_arbol.jpg" alt="Avos bg white" />
            </div>
            <div>
              <StaticImage src="../images/aguacates_caja_rosa.jpg" alt="Avos bg white" className="max-h-60" />
            </div>
            <div>
              <StaticImage src="../images/aguacates_canasta.jpg" alt="Avos basket" />
            </div>
            <div>
              <StaticImage src="../images/aguacates_fondo_azul.jpg" alt="Avos basket" />
            </div>
            <div>
              <StaticImage src="../images/aguacates_guacamole.jpg" alt="Avos basket" />
            </div>
            <div>
              <StaticImage src="../images/aguacates_verdes_mano.jpg" alt="Avos basket" className="max-h-60" />
            </div>
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default Gallery;
