import React, { useState } from 'react';
import Styles from '../css/Carrossel.module.css'
import banner1 from '../imagens/tele-1.png'
import banner2 from '../imagens/tele-2.png'
import banner3 from '../imagens/tele-3.png'
import banner4 from '../imagens/tele-4.png'
import banner5 from '../imagens/tele-5.png'

const imagens = [banner1, banner2, banner3, banner4, banner5];

const Carrossel = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Função para mover para o próximo item
  const irParaProximo = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % (imagens.length - 2)); // Subtrai 2 para garantir que 3 itens fiquem na tela
  };

  // Função para mover para o item anterior
  const irParaAnterior = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length - 2) % (imagens.length - 2));
  };

  return (
    <div className={Styles.carrosselContainer}>
      <button className={Styles.setaEsquerda} onClick={irParaAnterior}>←</button>

      <div className={Styles.carrossel}>
        <img className={Styles.image} src={imagens[indiceAtual]} alt="Carrossel" />
        <img className={Styles.image} src={imagens[indiceAtual + 1]} alt="Carrossel" />
        <img className={Styles.image} src={imagens[indiceAtual + 2]} alt="Carrossel" />
      </div>

      <button className={Styles.setaDireita} onClick={irParaProximo}>→</button>
    </div>
  );
};

export default Carrossel;
