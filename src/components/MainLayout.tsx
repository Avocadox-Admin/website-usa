import React, { PropsWithChildren } from 'react';
import NavBar from './NavBar';
import PaneLayout from './paneLayout';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* <NavBar /> */}
      <PaneLayout type={'navBar'}>
        <NavBar />
      </PaneLayout>
      {children}
      <PaneLayout type={'footer'}>
        <div className="flex w-full max-w-7xl">Footer</div>
      </PaneLayout>
    </>
  );
};

export default MainLayout;
