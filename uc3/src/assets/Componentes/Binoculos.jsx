import Styles from '../css/Binoculos.module.css'
import bino1 from '../imagens/bino1.png';
import bino2 from '../imagens/bino2.png';
import bino3 from '../imagens/bino3.png';
import bino4 from '../imagens/bino4.png';
import bino5 from '../imagens/bino5.png';

const produtos = [
  {
    nome: 'Binoculo Astronômico Lugan Astromatch LG807 20-40x100AT',
    preco: 'R$ 219,99',
    categoria: 'Aluguel',
    imagem: bino1,
  },
  {
    nome: 'Binóculo Octans Spare II PRO 20x80 AT com oculares BIG EYE - TRIPLET',
    preco: 'R$ 179,99',
    categoria: 'Aluguel',
    imagem: bino2,
  },
  {
    nome: 'Binóculo GSN 15x70 PRO',
    preco: 'R$ 199,99',
    categoria: 'Aluguel',
    imagem: bino3,
  },
  {
    nome: 'Binóculo Octans Spare II PRO 15x70 AT com Ocular BIG EYE com Estojo de Alumínio',
    preco: 'R$ 699,99',
    categoria: 'Compra',
    imagem: bino4,
  },
  {
    nome: 'Binóculo Octans Spare II PRO 15x70 AT com Ocular BIG EYE',
    preco: 'R$ 980,00',
    categoria: 'Compra',
    imagem: bino5,
  },

];

function Binoculos() {
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

export default Binoculos;
