import React from 'react';

import WhatsappIcon from '../images/whatsapp.inline.svg';
import FacebookIcon from '../images/facebook.inline.svg';
import InstagramIcon from '../images/instagram.inline.svg';
import TwitterIcon from '../images/twitter.inline.svg';

const Footer = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl">
      <div className="flex justify-center p-6 gap-3">
        <a href="https://www.facebook.com/people/Avocadox/100076258565785/" target="_blank">
          <FacebookIcon className="h-8 w-8" />
        </a>
        <a href="https://www.instagram.com/avocadox.mx/?hl=es" target="_bank">
          <InstagramIcon className="h-8 w-8" />
        </a>

        <TwitterIcon className="h-8 w-8" />
        <WhatsappIcon className="h-8 w-8" />
      </div>
      <div className="grid w-full md:grid-cols-3 items-center">
        {/*<div className="flex flex-col items-center mt-4 md:justify-center  md:flex-row md:gap-6">
        <a className="flex items-center gap-2" href="mailto:direccion@avocadoxmx.com">
          <EmailIcon className="h-8 w-8"></EmailIcon>
          direccion@avocadoxmx.com
        </a>
        <a className="flex items-center gap-2" href="tel:+524431396055">
          <PhoneIcon className="h-8 w-8" />
          <span>+52 4431396055</span>
        </a> */}
        <div className="text-sm p-4 flex flex-col items-center">
          <p>Oficinas Administrativas</p>
          <p>Global Working</p>
          <p>PI Tchiaikovski #67 3</p>
          <p>CP 58290 La Loma</p>
          <p>Morelia Michoacán México</p>
        </div>
        <div className="text-sm p-4 flex flex-col items-center">
          <p>Centro de Operaciones</p>
          <p>Carretera Morelia Pátzcuaro</p>
          <p>KM 31 CP 58450</p>
          <p>Lagunillas Michoacán México</p>
        </div>
        <div className="text-sm p-4 flex flex-col items-center">
          <p>Oficinas Corporativas</p>
          <p>Park Plaza Santa Fé</p>
          <p>Torre 1 piso 5</p>
          <p>Javier Barros Sierra #503</p>
          <p>Delegación Álvaro Obregón</p>
          <p>Col. La Loma CDMX CP 01210</p>
          <a href="https://vxtnegocios.mx" className="an">www.vxtnegocios.mx</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
