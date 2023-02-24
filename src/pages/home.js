import React from 'react';

import Carrossel from '../componentes/carrossel';
import Botao from '../componentes/botao_sabia'

function Home() {
  return (
      <div className="home">
        <Carrossel className="Carrossel" />
        <Botao className="Botao" />
      </div>
  );
}

export default Home;