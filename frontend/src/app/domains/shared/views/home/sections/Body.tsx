import React from 'react';

const Body = () => {
  return (
    <main className="container mx-auto pt-12 px-4 py-8">
      <section className="text-center">
        <h2 className="text-4xl  font-bold text-gray-800 mb-4">
          Welcome to the Next.js Base Project
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          This is a starter template for building scalable and efficient web
          applications with Next.js.
        </p>
        <a
          href="#features"
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Explore Features
        </a>
      </section>

      <section id="features" className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Features</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Preconfigured with TypeScript and ESLint</li>
          <li>Responsive design using Tailwind CSS</li>
          <li>State management with Zustand</li>
          <li>Modular and scalable folder structure</li>
          <li>API integration ready</li>
        </ul>
      </section>

      <section id="about" className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          About This Project
        </h3>
        <p className="text-gray-600">
          This repository is designed to provide developers with a solid
          starting point for building modern web applications using Next.js.
          With a clean architecture and preconfigured tools, you can focus on
          building features instead of setting up the project.
        </p>
      </section>

      <section id="contact" className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact</h3>
        <p className="text-gray-600">
          If you have any questions or suggestions, feel free to reach out on
          our GitHub repository.
        </p>
      </section>
    </main>
  );
};

export default Body;
