import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import MainLayout from '../components/MainLayout';
import PaneLayout from '../components/paneLayout';

const Recipes = () => {
  return (
    <MainLayout>
      <PaneLayout type={'common'}>
        <div className="mt-12 max-w-7xl w-full">
          <div className="h-20 bg-[#ACC465] text-white text-5xl flex justify-center items-center">
            Recipes
          </div>
          <div>
            <StaticImage src="../images/aguacate_medio_tabla.jpg" alt="Avos on table" />
          </div>
          <div className="grid md:grid-cols-2">
            <div className="px-10 py-6">
              <h2>INGREDIENTS</h2>
              <ul className="list-disc my-5">
                <li>4 large avocados</li>
                <li>1 lb lean ground beef</li>
                <li>4 slices of cheese of your choice</li>
                <li>1/2 tsp white sesame seeds</li>
                <li>1 tomato</li>
                <li>16 baby spinach leaves</li>
                <li>4 large green leaf lettuce leaves</li>
                <li>salt and pepper</li>
                <li>condiments of your choice</li>
              </ul>
              <p>
                These burgers use avocado halves as the buns. They are a fun and low carb way to
                serve burgers for your next grilling event.
              </p>
              <p>First, you need firm ripe avocados.</p>
              <p>
                You want to choose avocados that still feel firm all around, except at the very tip
                (where the stem is) there should be a little give if you apply gentle pressure. If
                you choose an avocado that is already soft all around you’ll have a really hard time
                peeling the skin off of the avocado without having the avocado flesh sticking to the
                skin and then your buns won’t look as nice.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 py-6">
              <h2 className="text-xl font-bold">Avocado Bun</h2>
              <StaticImage src="../images/sl4.jpg" alt="Avo Burger" />
            </div>
          </div>
          <div>
            <StaticImage src="../images/guacamole_aguacate.jpg" alt="Guacamole" />
          </div>
          <div className="grid md:grid-cols-2">
            <div className="px-10 py-6">
              <h2>INGREDIENTS</h2>
              <ul className="list-disc my-5">
                <li>1 medium avocado</li>
                <li>1 beautiful load of rustic bread </li>
                <li>4 slices of cheese of your choice</li>
                <li>1/2 tsp white sunflower seeds</li>
                <li>1/2 tsp crushes red pepper</li>
                <li>6 basil leaves</li>
                <li>4 roasted garlic cloves</li>
                <li>salt and pepper</li>
                <li>condiments of your choice</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 py-6">
              <h2 className="text-xl font-bold">Avocado Toast</h2>
              <StaticImage src="../images/avo_toast.jpg" alt="Avo toast" />
            </div>
          </div>
          <div>
            <StaticImage src="../images/avocado-gd7269fd06_1920.jpg" alt="Avos tajin" />
          </div>

          <div className="grid md:grid-cols-2">
            <div className="px-10 py-6">
              <h2>INGREDIENTS</h2>
              <ul className="list-disc my-5">
                <li>4 large avocados</li>
                <li>1/2 lb Shrimps</li>
                <li>4 tablespoons of mayonnaise </li>
                <li>2 boiled eggs</li>
                <li>1 tomato</li>
                <li>1 tablespoon chopped coriander</li>
                <li>1/2 chopped onion</li>
                <li>salt and pepper</li>
                <li>condiments of your choice</li>
              </ul>
              <p>First, you need firm ripe avocados.</p>
              <p>
                You want to choose avocados that still feel firm all around, except at the very tip
                (where the stem is) there should be a little give if you apply gentle pressure. If
                you choose an avocado that is already soft all around you’ll have a really hard time
                peeling the skin off of the avocado without having the avocado flesh sticking to the
                skin and then your buns won’t look as nice.
              </p>
              <p>
                Mix all the ingredients together and fill the avocado halves. Pour on the top some
                sesame seeds and put the boiled egg.
              </p>
              <p>Enjoy this del, delicious recipe!</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 py-6">
              <h2 className="text-xl font-bold">Avocado Shrimp & Eggs</h2>
              <StaticImage src="../images/shrimp_egg_avo.jpg" alt="Shrimp and eggs" />
            </div>
          </div>
          <div>
            <StaticImage src="../images/aguacates_guacamole.jpg" alt="Avos and guacamole" />
          </div>
        </div>
      </PaneLayout>
    </MainLayout>
  );
};

export default Recipes;
