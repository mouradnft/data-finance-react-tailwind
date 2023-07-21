import React from 'react';

import Allemagne from '../assets/allemeagne.jpg';
import Canada from '../assets/canadaetude.jpg';
import Usa from '../assets/usaetude.jpg';
import Espagne from '../assets/espagne.jpg';

export default function Study() {
  return (
    <div className="w-full py-[5rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h1 className="text-2xl font-bold text-center py-8">Études au USA</h1>
          <img
            className="text-center text-4xl font-bold"
            src={Usa}
            alt="/"
          ></img>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Les États-Unis sont connus pour leur excellence académique et leur
              diversité d'opportunités d'études. Explorez les campus
              prestigieux, les programmes innovants et les ressources de pointe
              offertes par les universités américaines. Notre agence vous
              accompagne dans votre projet d'études aux États-Unis pour vous
              aider à réaliser votre plein potentiel académique.
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h1 className="text-2xl font-bold text-center py-8">
            Études au Canada
          </h1>
          <img
            className="text-center text-4xl font-bold"
            src={Canada}
            alt="/"
          ></img>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Faites l'expérience d'une éducation de classe mondiale dans un
              environnement inclusif et accueillant en choisissant le Canada
              comme destination d'études. Notre agence vous guide dans la
              recherche des meilleures options académiques et vous aide à
              concrétiser votre projet d'études au pays de l'érable.
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h1 className="text-2xl font-bold text-center py-8">
            Études en Allemagne
          </h1>
          <img
            className="text-center text-4xl font-bold"
            src={Allemagne}
            alt="/"
          ></img>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              L'Allemagne est réputée pour ses universités de qualité, son
              système éducatif renommé et ses opportunités de recherche de
              pointe. Explorez les programmes d'études variés, les frais de
              scolarité abordables et les perspectives professionnelles
              attrayantes offertes par les institutions d'enseignement supérieur
              allemandes.
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Études en Espagne
          </h2>
          <img
            className="text-center text-4xl font-bold "
            src={Espagne}
            alt="/"
          ></img>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              L'Espagne est réputée pour son riche patrimoine culturel, ses
              universités de qualité et son style de vie méditerranéen
              attrayant. Découvrez les programmes d'études diversifiés, les
              campus modernes et les opportunités linguistiques passionnantes
              qu'offre l'Espagne aux étudiants internationaux.
            </p>
          </div>
          {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button> */}
        </div>
      </div>
    </div>
  );
}
