import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 text-gray-300 text-center">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Outown Educational Institute
        </h1>
        <p className="py-4">Restez connecté avec nous :</p>
        <p>
          Agence Marocaine d'immigration et de consulting d'étude à l'étranger -
          Maroc - Fès Outown Educational Institute - 2 avenue Joulane Atlas,
          Immeuble : Bureaux Arroukay, 3 ème étage - Fès - Morocco
          Contactez-nous :{' '}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBlDXGXtVRNWJNZxJNRFCcDRtLDnmNGDcMTXQWbqJfXLPWmbVRzkBFjsnjQJNXqzXQKgkC"
            className="text-blue-500"
            target="blank"
          >
            Cliquer ici pour envoyer un mail
          </a>{' '}
          |{' '}
          <a
            href="https://wa.me/+212664034137"
            className="text-blue-500"
            target="blank"
          >
            +212 6 64 03 41 37
          </a>
          |{' '}
          <a
            href="https://wa.me/+212774852338"
            className="text-blue-500"
            target="blank"
          >
            +212 7 74 85 23 38
          </a>
        </p>
        <div className="flex  justify-center md:w-[75%] ml-auto mr-auto md:mt-4  ">
          <a
            href="https://web.facebook.com/outowneducationalinstitute/?_rdc=1&_rdr"
            target="blank"
          >
            {' '}
            <FaFacebookSquare size={50} className="mr-4" />
          </a>
          <a
            href="https://www.instagram.com/outown.academy/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="blank"
          >
            <FaInstagram size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
