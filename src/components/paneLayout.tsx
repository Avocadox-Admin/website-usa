import React, { ReactNode } from 'react';

const paneType: any = {
  navBar: 'flex fixed bg-white/[0.8] z-10 border-b justify-center max-h-12',
  common: 'flex justify-center',
  footer: 'flex justify-center h-20 bg-[#ACC465] text-white'
};

interface PaneProps {
  children: ReactNode;
  type?: string;
}

const PaneLayout = ({ children, type }: PaneProps & string) => {
  let classNames = 'w-full'
  if(type) {
    classNames = `${classNames} ${paneType[type]}`
  }
  return <div className={classNames}>{children}</div>;
};

export default PaneLayout;
