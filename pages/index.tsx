import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao meu projeto com Next.js e TypeScript!</p>
    </div>
  );
};

export default Home;