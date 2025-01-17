import React from 'react';

const Newsletter = () => {
  return (
    <div className=" w-full py-16 text-white px-4 text-center">
      <div className="max-w-[1240px] mx-auto grid  text-center ">
        <div className="lg:col-span-2 my-4 text-center ml-auto mr-auto">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-10">
            Prêt à franchir les frontières et à bâtir une nouvelle vie à
            l'étranger ?
          </h1>
          <p className="">
            Notre agence d'immigration est là pour vous accompagner dans votre
            projet d'immigration vers le Canada et les États-Unis. Nous
            comprenons les défis et les questions auxquels vous faites face,
            c'est pourquoi nous mettons notre expertise à votre service. De
            l'obtention des visas à l'installation dans votre nouveau pays, nous
            vous soutenons à chaque étape. Faites confiance à notre équipe
            dévouée pour réaliser votre rêve d'une vie meilleure à l'étranger.
            Contactez-nous dès aujourd'hui au{' '}
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
};

export default Newsletter;
