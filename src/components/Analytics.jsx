import React from 'react';
import Flight from '../assets/flight.png';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 border-b">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Flight} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#00df9a] font-bold md:text-4xl sm:text-6xl ">
            Nos services
          </h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 md:mb-4 ">
            Immigration
          </h1>
          <p>
            Nous sommes une agence d'immigration et de consulting d'étude à
            l'étranger dévouée à vous aider à réaliser vos rêves de vivre,
            étudier et travailler à l'étranger. Notre expertise se concentre sur
            l'immigration vers le Canada et les États-Unis, où nous vous
            accompagnons tout au long du processus pour faciliter votre
            transition vers une nouvelle vie. Que ce soit pour une installation
            permanente, l'obtention d'un visa d'étudiant ou un programme de
            travail, nous sommes là pour vous guider avec notre expérience et
            notre connaissance approfondie des réglementations en vigueur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
