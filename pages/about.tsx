// pages/about.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Sobre</h1>
      <p>Esta é a página sobre mim e o meu projeto.</p>
    </div>
  );
};

export default About;
