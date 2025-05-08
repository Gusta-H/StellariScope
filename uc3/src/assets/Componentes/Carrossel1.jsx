import React, { useState, useEffect } from 'react';
import Styles from '../css/Carrossel1.module.css'
import banner1 from '../imagens/banner1.png'
import banner2 from '../imagens/banner2.png'
import banner3 from '../imagens/banner3.png'

const imagens = [banner1, banner2, banner3];

const Carrossel = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
    }, 3000); 

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className={Styles.caixa1}>
      <img className={Styles.image}
        src={imagens[indiceAtual]}
        alt="Carrossel1"
      />
    </div>
  );
};

export default Carrossel;