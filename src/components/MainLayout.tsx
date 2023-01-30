import React, { PropsWithChildren, useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';
import Footer from './Footer';
import NavBar from './NavBar';
import PaneLayout from './paneLayout';
import SideDrawer from './SideDrawer';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const screenSize = useScreenSize();

  const handleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      {/* <NavBar /> */}
      <PaneLayout type={'navBar'}>
        <NavBar drawerHandler={handleDrawer} />
      </PaneLayout>
      {children}
      <PaneLayout type={'footer'}>
        <Footer />
      </PaneLayout>
      {screenSize === 'sm' && <SideDrawer showDrawer={openDrawer} drawerHandler={handleDrawer} />}
    </>
  );
};

export default MainLayout;
