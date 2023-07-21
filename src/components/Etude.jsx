import React from 'react';
import Flight from '../assets/flight.png';
import Typed from 'react-typed';

export default function Etude() {
  return (
    <div className="w-full bg-white py-16 px-4 border-b">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Flight} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#00df9a] font-bold md:text-4xl sm:text-6xl ">
            Étude à l'étranger
          </h1>
          <Typed
            className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 md:mb-4 "
            strings={['USA', 'Canada', 'Allemagne', 'Espagne']}
            typeSpeed={120}
            backSpeed={120}
            loop
          ></Typed>
          <p>
            En plus de nos services d'immigration, nous proposons également des
            solutions complètes pour l'étude à l'étranger. Nous offrons des
            opportunités d'études passionnantes dans des pays renommés tels que
            le Canada, les États-Unis, la France, l'Espagne et l'Allemagne. Que
            vous cherchiez à obtenir un diplôme universitaire, à améliorer vos
            compétences linguistiques ou à acquérir une expérience
            internationale, nous vous offrons une gamme de programmes éducatifs
            adaptés à vos aspirations. Profitez dès maintenant de notre
            promotion spéciale qui comprend des réductions sur les frais de
            scolarité et des avantages supplémentaires. Explorez le monde et
            construisez un avenir prometteur grâce à nos services de qualité
          </p>
        </div>
      </div>
    </div>
  );
}
