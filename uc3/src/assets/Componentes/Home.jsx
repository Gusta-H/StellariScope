
import Styles from '../css/Home.module.css'
import Carmo from '../imagens/carmo.png'
import Ibirapuera from '../imagens/ibirapuera.png'
import Johannes from '../imagens/johannes.png'
import Pico from '../imagens/planetario-pico.png'
import Centro from '../imagens/planetario-centro.png'
import Nacional from '../imagens/planetario-nacional.png'
import Valongo from '../imagens/planetario-valongo.png'
import Moraes from '../imagens/planetario-moraes.png'
import Brasopolis from '../imagens/planetario-Brasopolis.png'
import Carrosel from './Carrossel'
import Carrossel_cliente from './Carrossel_cliente'


function Home() {
  return (
    <section>
      <div className={Styles.alinhamento_principal}>
        <h1 className={Styles.titulo_principal}>Explore o universo ao <br /> seu alcance</h1>
        <p className={Styles.texto_principal}>Descubra planetários, alugue e compre os melhores equipamentos <br /> para observação astronômica  e encontre os espaços ideais para<br /> observação espacial.</p>

        <a href="#planetarios" className={Styles.cta_button}>Comece a explorar</a>

      </div>

      <div className={Styles.scroll_down}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7e57c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>

      <div className={Styles.planetario}>
        <h2>Planetários Incríveis</h2>
      </div>

      <div className={Styles.quadro}>
        <div className={Styles.card}>
          <img src={Carmo} alt="" />
          <p>Planetário do Carmo</p>
          <button className={Styles.botao_planetario}>Saiba mais</button>
        </div>
        <div className={Styles.card}>
          <img src={Ibirapuera} alt="" />
          <p>Planetário do Ibirapuera</p>
          <button className={Styles.botao_planetario}>Saiba mais</button>
        </div>
        <div className={Styles.card}>
          <img src={Johannes} alt="" />
          <p>Planetário Johannes Kepler</p>
          <button className={Styles.botao_planetario}>Saiba mais</button>
        </div>
      </div>

      <div className={Styles.planetario}>
        <h2>Espaços para observação</h2>
      </div>

      <div className={Styles.grid}>
        <div className={Styles.observacao}>
          <img src={Pico} alt="Observatório " />
          <div className={Styles.mensagem}>Observatório Pico dos Dias - MG</div>
        </div>
        <div className={Styles.observacao}>
          <img src={Centro} alt="Centro de Estudos do Universo" />
          <div className={Styles.mensagem}>Fundação Centro de Estudos do Universo - São Paulo</div>
        </div>
        <div className={Styles.observacao}>
          <img src={Nacional} alt="Observatório 2" />
          <div className={Styles.mensagem}>Observatório Nacional - RJ</div>
        </div>
        <div className={Styles.observacao}>
          <img src={Valongo} alt="Observatório 3" />
          <div className={Styles.mensagem}>Observatório do Valongo - RJ</div>
        </div>
        <div className={Styles.observacao}>
          <img src={Moraes} alt="Observatório 4" />
          <div className={Styles.mensagem}>Observatório Abrahão de Moraes - SP</div>
        </div>
        <div className={Styles.observacao}>
          <img src={Brasopolis} alt="Observatório 5" />
          <div className={Styles.mensagem}>Observatório Astronômico de Brasópolis - MG</div>
        </div>
      </div>

      <div className={Styles.observatorio}>
        <button className={Styles.botao_observatorio}>Descubra mais observatórios próximos de você</button>
      </div>

      <div className={Styles.produto}>
        <h2>Nossos produtos</h2>
      </div>

      <div>
        <Carrosel />
        <div className={Styles.texto_loja}>
          <p className={Styles.pproduto}>Encontre telescópios, livros e acessórios para explorar o universo de forma única. Venha descobrir tudo o que preparamos para você! ✨</p>
        </div>

        <div className={Styles.botao_loja}>
          <p>Visite nossa loja</p>
        </div>

      </div>

        <div className={Styles.texto_escolher}>
          <h2>Por que escolher a Stellariscope?</h2>
        </div>

      <div className={Styles.caixa}>
          <div className={Styles.motivos}>
            <h1>💫</h1>
            <h3>Expertise em Astronomia</h3>
            <p>Nossa equipe é formada por astrônomos profissionais e entusiastas apaixonados pelo universo.</p>
          </div>
          <div className={Styles.motivos}>
            <h1>✨</h1>
            <h3>Curadoria Especializada</h3>
            <p>Selecionamos apenas os melhores locais e produtos para sua experiência astronômica.</p>
          </div>
          <div className={Styles.motivos}>
            <h1>🚀</h1>
            <h3>Eventos exclusivos</h3>
            <p>Oferecemos eventos e observações em locais privilegiados com condições ideais.</p>
          </div>
        </div>

        <div className={Styles.cliente}>
          <h2>Nossos clientes</h2>
        </div>

        <Carrossel_cliente />



    </section>)

} export default Home;