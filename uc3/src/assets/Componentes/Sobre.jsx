import React from 'react';
import Styles from '../css/Sobre.module.css';
import SimpleSlider from '../Componentes/Carrossel_planetario';

import Carmo1 from '../imagens/carmo_p1.jpg';
import Carmo2 from '../imagens/carmo_p2.jpeg';
import Carmo3 from '../imagens/carmo_p3.jpg';
import Ibira1 from '../imagens/ibira_p1.webp';
import Ibira2 from '../imagens/ibira_p2.webp';
import Ibira3 from '../imagens/ibira_p3.jpg';
import Joha1 from '../imagens/joha_p1.jpg';
import Joha2 from '../imagens/joha_p2.jpg';
import Joha3 from '../imagens/joha_p3.jpg';

function Sobre() {
  const array1 = [Carmo1, Carmo2, Carmo3];
  const array2 = [Ibira1, Ibira2, Ibira3];
  const array3 = [Joha1, Joha2, Joha3];

  function scroll(event) {
    event.preventDefault();
    document.getElementById('planetario0').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section>

      <main className={Styles.fundinho}>
        <div className={Styles.titulo}>
          <h1 className={Styles.degrade}>O céu ganha vida diante dos seus olhos</h1>
          <p className={Styles.ceu}>
            Nossos planetários transformam conhecimento em espetáculo. Sente-se, olhe para cima e se deixe envolver por projeções realistas do cosmos — uma experiência imersiva onde ciência, tecnologia e encantamento se encontram.
          </p>
          <button className={Styles.descendo} onClick={scroll}>
            Descubra o mais próximo de você
          </button>
        </div>

        <section id='planetario0' className={Styles.planetario0}>
          <div className={Styles.carmo}>
            <h1 className={Styles.carmo_h1}>Planetário do Carmo</h1>
            <p className={Styles.carmo_p}>
              O Planetário do Parque do Carmo se destaca por oferecer um espaço acessível e inclusivo. Conta com estrutura adaptada para pessoas com mobilidade reduzida, como rampas e assentos reservados, além de recursos como intérprete de Libras e audiodescrição em algumas sessões.
            </p>
            <a className={Styles.AA} href='https://www.parquedocarmo.net/planetario-parque-do-carmo/' target='_blank' rel="noopener noreferrer">
              <button className={Styles.butao}>Saiba mais</button>
            </a>
          </div>
          <div className={Styles.fotocarmo}>
            <SimpleSlider quant={3} arrayImg={array1} />
          </div>
        </section>

        <section className={Styles.planetario1}>
          <div className={Styles.fotoibira}>
            <SimpleSlider quant={3} arrayImg={array2} />
          </div>
          <div className={Styles.ibira}>
            <h1 className={Styles.ibira_h1}>Planetário do Ibirapuera</h1>
            <p className={Styles.ibira_p}>
              Inaugurado em 1957, o Planetário do Ibirapuera foi o primeiro planetário do Brasil, marcando um grande passo para a divulgação da astronomia no país. Criado para promover o conhecimento científico de forma acessível, ele foi o pioneiro a oferecer uma experiência imersiva e educativa sobre o universo.
            </p>
            <a className={Styles.ibira_a} href='https://planetario.urbiapass.com.br/' target='_blank' rel="noopener noreferrer">
              <button className={Styles.ibira_b}>Saiba mais</button>
            </a>
          </div>
        </section>

        <section className={Styles.planetario2}>
          <div className={Styles.joha}>
            <h1 className={Styles.joha_h1}>Planetário Johannes Kepler</h1>
            <p className={Styles.joha_p}>
              O Planetário Johannes Kepler oferece sessões educativas alinhadas ao currículo escolar, com linguagem acessível e conteúdo envolvente. A experiência ajuda os alunos a compreenderem melhor temas como astronomia e ciências em geral.
            </p>
            <a className={Styles.AA} href='https://www3.santoandre.sp.gov.br/turismosantoandre/planetario/' target='_blank' rel="noopener noreferrer">
              <button className={Styles.butao}>Saiba mais</button>
            </a>
          </div>
          <div className={Styles.fotojoha}>
            <SimpleSlider quant={3} arrayImg={array3} />
          </div>
        </section>
      </main>
    </section>
  );
}

export default Sobre;
