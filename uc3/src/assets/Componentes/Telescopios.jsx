import { Link } from 'react-router-dom';
import Styles from '../css/Telescopios.module.css';
import tele1 from '../imagens/tele1.png';
import tele2 from '../imagens/tele2.png';
import tele3 from '../imagens/tele3.png';
import tele4 from '../imagens/tele4.png';
import tele5 from '../imagens/tele5.png';
import tele6 from '../imagens/tele6.png';

const produtos = [
  {
    nome: 'Telescopio Azimutal Refrator 700x70mm - Greika',
    preco: 'R$ 315,90',
    categoria: 'Aluguel',
    imagem: tele1,
  },
  {
    nome: 'Telescópio astronômico refletor F70076M Greika',
    preco: 'R$ 259,20',
    categoria: 'Aluguel',
    imagem: tele2,
  },
  {
    nome: 'Telescópio refrator azimutal D70/F70MM - REF BM-70070S',
    preco: 'R$ 385,79',
    categoria: 'Aluguel',
    imagem: tele3,
  },
  {
    nome: 'Sky-Watcher 705AZ Telescópio Refrator 70mm f/7',
    preco: 'R$ 899,00',
    categoria: 'Compra',
    imagem: tele4,
  },
  {
    nome: 'Telescópio N 130/650 Explorer EQ-2',
    preco: 'R$ 2.180,00',
    categoria: 'Compra',
    imagem: tele5,
    link: '/Produto', // link correto aqui
  },
  {
    nome: 'Telescópio Refletor Lelong 900114mm com Tripé',
    preco: 'R$ 1.699,00',
    categoria: 'Compra',
    imagem: tele6,
  },
];

function Telescopios() {
  return (
    <div className={Styles.Telescopios}>
      {produtos.map((item, index) => {
        const Wrapper = item.link ? Link : 'a'; // Usa Link se tiver link, senão usa <a>
        const wrapperProps = item.link
          ? { to: item.link, className: Styles.caixa1 }
          : { href: '#', className: Styles.caixa1 };

        return (
          <Wrapper key={index} {...wrapperProps}>
            <div className={`${Styles.categoria} ${item.categoria === 'Aluguel' ? Styles.aluguel : Styles.compra}`}>
              {item.categoria}
            </div>
            <img
              src={item.imagem}
              alt={item.nome}
              className={Styles.imagem}
            />
            <div className={Styles.text}>
              <p className={Styles.preco}>{item.preco}</p>
              <p className={Styles.nome}>{item.nome}</p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

export default Telescopios;
