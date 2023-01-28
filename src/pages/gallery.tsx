import React from 'react';
import MainLayout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

const Gallery = () => {
  return (
    <MainLayout>
      <PaneLayout type={'common'}>
        <div className="mt-12 max-w-7xl w-full">
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            Gallery
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default Gallery;
