import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import MainLayout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

import AvoIcon from '../images/avo1.inline.svg';
import WoldMapIcon from '../images/avo2.inline.svg';
import StarIcon from '../images/avo3.inline.svg';

const About = () => {
  return (
    <MainLayout>
      <PaneLayout type={'common'}>
        <div className="mt-12 max-w-7xl">
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            About Us
          </div>
          <h3 className="text-2xl font-bold flex justify-center my-10">
            We are a 100% mexican company, legally constituted and established.
          </h3>

          <div className="grid md:grid-cols-3 gap-4 my-10">
            <div className="flex flex-col items-center">
              <AvoIcon className="h-32 w-32" />
              <p>
                Dedicated to the production from the orchards to marketing of HASS type avocado with
                a projection of growth towards processed products such as oil, pulp & guacamole
              </p>
            </div>
            <div className="flex flex-col items-center">
              <WoldMapIcon className="h-32 w-32 fill-black" />
              <p>
                Thanks to the implementation of our vision and mission, we will be able to expand
                our service in national and institutional territory, managing to satisfy the needs
                of our most demanding clients.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <StarIcon className="h-32 w-32 fill-black" />
              <p>
                With our always firm commitment to our producers and our clients, we are sure that
                they will prefer us thanks to the expertise of the team and the knowledge of the
                group of farmers.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold flex justify-center my-10">Competitive advantage</h2>

          <ul className="list-disc">
            <li>
              The majority of our shareholders are avocado producers, which guarantees, to a great
              extent, the most important supply for the business.
            </li>
            <li>Being part of an institutional investment: VXT CAPITAL</li>
            <li>
              We like to have a close relationship with distributors in Europe, USA, Canada, Asia
              and GCC.
            </li>
          </ul>
          <div className="flex justify-center">
            <StaticImage
              src="../images/aguacate_dos_mitades.jpg"
              alt="Mitades"
              className="h-64 w-64"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <h3 className="text-2xl uppercase text-lime-600 self-center">Mision</h3>
              <p>
                Comply with the most demanding quality standards, with the norms of innocuousness
                and efficient supply, being a packaging with ecological policies that give back to
                our planet the benefits that ti provides us.
              </p>

              <h3 className="text-2xl uppercase text-lime-600 self-center mt-6">Vision</h3>
              <p>
                To be the best ecological and sustainable plant that distributes its products to the
                national and international markets with excellent quality and service, satistying
                end consumers.
              </p>
            </div>
            <div className="flex justify-center">
              <StaticImage
                src="../images/dos_aguacates_medio.jpg"
                alt="Mitades"
                className="h-64 w-64"
              />
            </div>
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default About;
