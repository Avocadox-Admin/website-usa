import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import useScreenSize from '../hooks/useScreenSize';

import BurgerIcon from '../images/burgerIcon.inline.svg';

interface NavProps {
  drawerHandler: (param: boolean) => void;
}

const NavBar = ({ drawerHandler }: NavProps) => {
  const screenSize = useScreenSize();

  return (
    <div className="flex justify-between w-full max-w-7xl">
      <div className="w-[180px] z-10 md:w-auto md:max-w-xs ">
        <Link to="/">
          <StaticImage src="../images/half_avo.png" alt="Avo half image" />
        </Link>
      </div>
      {screenSize === 'sm' ? (
        <>
          <div className="flex items-center">
            <Link to="/">
              <StaticImage src="../images/avocadox_usa_logo.png" alt="Avo Logo" height={38} />
            </Link>
          </div>
          <button onClick={() => drawerHandler(true)}>
            <BurgerIcon className="h-8 w-8" />
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <Link to="/about">About Us</Link>
            <Link to="/grow">How we grow</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="flex items-center">
            <Link to="/">
              <StaticImage src="../images/avocadox_usa_logo.png" alt="Avo Logo" height={38} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
