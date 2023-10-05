import React from 'react';
import { FaGithub, FaNpm, FaStackOverflow, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-white py-8">
      <div className="container mx-auto px-4 flex flex-col justify-between h-full">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center mb-4">
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.npmjs.com/~your-npm-username" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaNpm className="text-xl" />
            </a>
            <a href="https://stackoverflow.com/users/your-stackoverflow-profile" target="_blank" rel="noopener noreferrer">
              <FaStackOverflow className="text-xl" />
            </a>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
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