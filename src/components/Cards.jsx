import React from 'react';
import Usa from '../assets/Usa.jpg';
import Canada from '../assets/Canada.jpg';

const Cards = () => {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h1 className="text-2xl font-bold text-center py-8">
            Immigration au Canada
          </h1>
          <img
            className="text-center text-4xl font-bold"
            src={Canada}
            alt="/"
          ></img>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Le Canada vous offre une opportunité exceptionnelle de démarrer
              une nouvelle vie dans un pays accueillant, multiculturel et
              prospère, avec des programmes d'immigration diversifiés adaptés à
              vos besoins spécifiques.
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Immigration au USA
          </h2>
          <img
            className="text-center text-4xl font-bold "
            src={Usa}
            alt="/"
          ></img>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Les États-Unis sont une destination attrayante pour les immigrants
              à la recherche de nouvelles perspectives professionnelles,
              d'opportunités académiques et d'un mode de vie dynamique. Notre
              agence vous accompagne dans les démarches complexes de
              l'immigration aux États-Unis
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
