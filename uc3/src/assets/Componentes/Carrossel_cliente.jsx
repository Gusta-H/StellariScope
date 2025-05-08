import React from 'react';
import Styles from '../css/Carrossel_cliente.module.css';

import cliente1 from '../imagens/cliente-1.png';
import cliente2 from '../imagens/cliente-2.png';
import cliente3 from '../imagens/cliente-3.png';

class Carrossel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexAtual: 0,
      depoimentos: [
        {
          imagem: cliente1
        },
        {
          imagem: cliente2
        },
        {
          imagem: cliente3
        }
      ]
    };
  }

  anterior = () => {
    const novoIndex = this.state.indexAtual === 0
      ? this.state.depoimentos.length - 1
      : this.state.indexAtual - 1;
    this.setState({ indexAtual: novoIndex });
  }

  proximo = () => {
    const novoIndex = (this.state.indexAtual + 1) % this.state.depoimentos.length;
    this.setState({ indexAtual: novoIndex });
  }

  render() {
    const atual = this.state.depoimentos[this.state.indexAtual];

    return (
      <div className={Styles.carrossel}>
        <button className={Styles.seta} onClick={this.anterior}>‹</button>
        <div className={Styles.depoimento}>
          <img src={atual.imagem} alt="Foto do usuário" />
        </div>
        <button className={Styles.seta} onClick={this.proximo}>›</button>
      </div>
    );
  }
}

export default Carrossel;
