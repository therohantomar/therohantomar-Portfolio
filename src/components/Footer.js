import React from 'react';
import { FaGithub, FaNpm, FaStackOverflow, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-white py-8">
      <div className="container mx-auto px-4 flex flex-col justify-between items-center h-full">
        <div className="flex flex-wrap justify-between   w-full mb-8">
          <div className="flex items-center ">
            <a href="https://github.com/therohantomar" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.npmjs.com/~therohantomar" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaNpm className="text-xl" />
            </a>
            <a href="https://stackoverflow.com/users/16948601/rohan-tomar" target="_blank" rel="noopener noreferrer">
              <FaStackOverflow className="text-xl" />
            </a>
          </div>
          
          <div className="flex items-center  md:mt-0">
            <a href="tel:+918291774460" className="mr-4">
              <FaPhone className="text-xl" />
            </a>
            <a href="https://wa.me/918291774460" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaWhatsapp className="text-xl" />
            </a>
            <a href="mailto:therohantomar@gmail.com">
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-400">Contacts:</p>
          <p className="text-gray-400">Phone: +91 8291774460</p>
          <p className="text-gray-400">Email: therohantomar@gmail.com</p>
        </div>
        <div className="mt-4 md:mt-0 self-center">
            <p className="text-gray-400">Developed with ❤️ by therohantomar</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;