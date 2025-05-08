import Styles from '../css/Acessorios.module.css'
import tripe1 from '../imagens/tripe1.png';
import tripe2 from '../imagens/tripe2.png';
import tripe3 from '../imagens/tripe3.png';
import lente1 from '../imagens/lente1.png';
import lente2 from '../imagens/lente2.png';
import lente3 from '../imagens/lente3.png';

const produtos = [
  {
    nome: 'Tripé DIGIPOD TR 570N',
    preco: 'R$  320,00',
    categoria: 'Compra',
    imagem: tripe1,
  },
  {
    nome: 'Tripé Krupa Vulcan WT6307S PRO - Alta Performance',
    preco: 'R$ 530,00',
    categoria: 'Compra',
    imagem: tripe2,
  },
  {
    nome: 'Tripé Krupa Vulcan WT70G - Profissional',
    preco: 'R$ 360,00',
    categoria: 'Compra',
    imagem: tripe3,
  },
  {
    nome: 'Lente Barlow Sky-Watcher 2X - 32MM - Metal',
    preco: 'R$ 290,00',
    categoria: 'Compra',
    imagem: lente1,
  },
  {
    nome: 'Lente Barlow 2X - 32MM',
    preco: 'R$ 60,00',
    categoria: 'Compra',
    imagem: lente2,
  },
  {
    nome: 'Lente Barlow 2X - 32MM - Metal',
    preco: 'R$ 180,00',
    categoria: 'Compra',
    imagem: lente3,
  },
];

function Acessorios() {
  return (
    <div className={Styles.Telescopios}>
      {produtos.map((item, index) => (
        <a href="#" className={Styles.caixa1} key={index}>
          {/* Tarja da categoria */}
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
        </a>
      ))}
    </div>
  );
}

export default Acessorios;
