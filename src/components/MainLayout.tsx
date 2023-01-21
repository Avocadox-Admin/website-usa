import React, { PropsWithChildren } from 'react';
import NavBar from './NavBar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <main className="flex flex-col max-w-7xl ">{children}</main>
      <div>Footer</div>
    </div>
  );
};

export default MainLayout;
