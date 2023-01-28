import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <div className="flex justify-between w-full max-w-7xl">
      <div className="max-w-xs z-10">
        <Link to="/">
          <StaticImage src="../images/half_avo.png" alt="Avo half image" />
        </Link>
      </div>
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
    </div>
  );
};

export default NavBar;
