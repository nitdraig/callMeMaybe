import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-16">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Next.js Base Project. All rights
          reserved.
        </p>
        <span>
          Powered by{' '}
          <a href="https://agustin.top/" target="_blank">
            Agustin
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
