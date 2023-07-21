import React from 'react';

export default function Opportunity() {
  return (
    <div className=" w-full py-16 text-white px-4 text-center border-b ">
      <div className="max-w-[1240px] mx-auto grid  text-center ">
        <div className="lg:col-span-2 my-4 text-center ml-auto mr-auto">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-10">
            Prêt à vivre une expérience internationale inoubliable ?
          </h1>
          <p className="">
            Notre agence de consulting d'étude à l'étranger vous ouvre les
            portes des meilleures opportunités éducatives. Que vous souhaitiez
            étudier au Canada, aux États-Unis, en France, en Espagne, en
            Allemagne ou dans d'autres pays passionnants, nous avons les
            solutions adaptées à vos ambitions académiques. Bénéficiez de notre
            expertise pour choisir le programme d'études idéal, obtenir les
            visas nécessaires et profiter d'une expérience éducative
            enrichissante. Osez vous dépasser et construisez un avenir brillant
            grâce à une éducation internationale de qualité.{' '}
            {'                  '} Contactez-nous dès aujourd'hui au
            <a
              href="https://wa.me/+212664034137"
              className="text-blue-500"
              target="blank"
            >
              +212 6 64 03 41 37
            </a>{' '}
            ou{' '}
            <a
              href="https://wa.me/+212774852338"
              className="text-blue-500"
              target="blank"
            >
              +212 7 74 85 23 38
            </a>{' '}
            , ou envoyez-nous un email à{' '}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBlDXGXtVRNWJNZxJNRFCcDRtLDnmNGDcMTXQWbqJfXLPWmbVRzkBFjsnjQJNXqzXQKgkC"
              className="text-blue-500"
              target="blank"
            >
              outownacademy.inbox@gmail.com
            </a>{' '}
            pour commencer votre voyage vers une nouvelle vie.
          </p>
          <button className="bg-[#00df9a] w-[300px] rounded-md font-medium my-6 mx-auto py-3 text-black md:mt-10 hover:opacity-80">
            <a href="https://koalendar.com/e/meet-with-outown-academy ">
              {' '}
              Prenez un rendez-vous en ligne
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
