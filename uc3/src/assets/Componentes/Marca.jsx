import { useRef } from 'react';
import Styles from '../css/Marca.module.css';
import blusa from '../imagens/blusa_stellari.png';
import moletom from '../imagens/moletom_stellari.png';
import copo from '../imagens/copo_stellari.png';
import chaveiro from '../imagens/chaveiro_stellari.png';
import bone from '../imagens/bone_stellari.png';
import bottom from '../imagens/bottom_stellari.png';

const produtos = [
  {
    nome: 'Camiseta exclusiva Stellari scope',
    preco: 'R$ 69,99',
    imagem: blusa,
  },
  {
    nome: 'Moletom exclusivo Stellari scope',
    preco: 'R$ 109,99',
    imagem: moletom,
  },
  {
    nome: 'Copo exclusivo Stellari scope',
    preco: 'R$ 29,99',
    imagem: copo,
  },
  {
    nome: 'Chaveiro exclusivo Stellari scope',
    preco: 'R$ 12,99',
    imagem: chaveiro,
  },
  {
    nome: 'Bone exclusivo Stellari scope',
    preco: 'R$ 54,99',
    imagem: bone,
  },
  {
    nome: 'Bottom exclusivo Stellari scope',
    preco: 'R$ 6,99',
    imagem: bottom,
  },
];

function Marca() {
  const carrosselRef = useRef(null);

  const scroll = (direction) => {
    if (carrosselRef.current) {
      const { scrollLeft, clientWidth } = carrosselRef.current;
      const scrollAmount = clientWidth * 0.8; 
      carrosselRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={Styles.caixa1}>
      <div className={Styles.texto}>
        <h1>USE NOSSA MARCA💫</h1>
      </div>
      <div className={Styles.container}>
        <button className={Styles.btn} onClick={() => scroll('left')}>&lt;</button>
        <div className={Styles.carrossel} ref={carrosselRef}>
          {produtos.map((item, index) => (
            <a href="#" className={Styles.card} key={index}>
              <img
                src={item.imagem}
                alt={item.nome}
                className={`${Styles.imagem} ${item.nome.includes('Camiseta') ? Styles.ajusteBlusa : ''}`}/>
              <div className={Styles.text}>
                <p className={Styles.preco}>{item.preco}</p>
                <p className={Styles.nome}>{item.nome}</p>
              </div>
            </a>
          ))}
        </div>
        <button className={Styles.btn} onClick={() => scroll('right')}>&gt;</button>
      </div>
    </div>
  );
}

export default Marca;