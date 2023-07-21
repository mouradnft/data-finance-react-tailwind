import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl md:mt-10 sm:text-6xl text-4xl font-bold md:py-6 ">
          Explorez le monde avec nous !
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            pour t'aider a acceder au
          </p>
          <Typed
            className="md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={['USA', 'Canada', 'Allemagne', 'Espagne']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 pt-10">
          Agence Marocaine d'immigration et de consulting d'étude à l'étranger -
          Maroc - Fès Outown Educational Institute - 2 avenue Joulane Atlas,
          Immeuble : Bureaux Arroukay, 3 ème étage - Fès - Morocco Téléphone :
          <a href="https://wa.me/+212664034137" target="blank">
            {' '}
            +212 6 64 03 41 37{' '}
          </a>{' '}
          ou{' '}
          <a href="https://wa.me/+212774852338" target="blank">
            +212 7 74 85 23 38
          </a>
        </p>
        <button className="bg-[#00df9a] w-[250px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          <a href="https://koalendar.com/e/meet-with-outown-academy ">
            {' '}
            Prenez un rendez-vous en ligne
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
