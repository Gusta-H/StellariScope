import Styles from '../css/Produtos1.module.css'
import foto1 from '../imagens/telescopio1.png'
import foto2 from '../imagens/telescopio2.png'
import foto3 from '../imagens/telescopio3.png'
import imagem1 from '../imagens/foto1.png'
import imagem2 from '../imagens/foto2.png'
import imagem3 from '../imagens/foto4.png'


function Produtos() {

    return (
        <section className={Styles.produtos}>
            <section className={Styles.infoProduto}>
                <div className={Styles.galeria}>
                    <a href='#' className={Styles.foto2}>
                        <img src={foto2} />
                    </a>
                    <a href='#' className={Styles.foto3}>
                        <img src={foto3} />
                    </a>
                </div>
                <div className={Styles.foto}>
                    <img src={foto1} />
                </div>
                <div className={Styles.infos}>
                    <h1>Telescópio N 130/650 Explorer EQ-2</h1>
                    <div className={Styles.avaliacao}></div>
                    <p>Marca: Sky-Watcher</p>
                    <h2>R$ 2.180,00</h2>

                    <div className={Styles.frete}>
                        <p> Simular frete </p>
                        <div className={Styles.cepContainer}>
                            <div className={Styles.cepInput}>
                                <span className={Styles.icon}></span>
                                <input type="text" placeholder="📍Informe seu CEP" className={Styles.cepField} />
                            </div>
                            <button className={Styles.calcularBtn}>Calcular</button>
                        </div>
                    </div>
                    <button className={Styles.Btn}>Adicionar ao carrinho</button>
                </div>
            </section>
            <section className={Styles.tela3D}>
                <p>Veja o alcance desse telescópio! </p>
                <div className={Styles.tela}>
                    <iframe
                        width="98%"
                        height="430"
                        src="https://www.youtube.com/embed/Q-UQjm7equk?rel=0&modestbranding=1&showinfo=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className={Styles.descricao}>
                <div className={Styles.descricao1}>
                    <h1> Descrição </h1>
                    <p> ✦ Abertura grande de 150 mm: o telescópio refletor para astronomia adulta tem uma distância focal de 650 mm e abertura de 150 mm, oferecendo excelente poder de captação de luz, garantindo qualidade de imagem excepcional, perfeito para a observação de objetivos celestes do espaço profundo.<br></br><br></br>

                        ✦Ótica de excelente qualidade: equipada com duas oculares de excelente qualidade (25 mm e 10 mm) e uma lente Barlow 2X. Amplifica a lua em até 26X ou 130X. O localizador de pontos vermelhos facilita a localização de objetos. O filtro de lua reduzirá o brilho e protegerá seus olhos.<br></br><br></br>

                        ✦Montagem equatorial atualizada: o telescópio refletor possui um suporte equatorial alemão com um mostrador e cabos de câmera lenta para apontar com precisão suave e rastreamento rápido de objetos celestes. Você pode aproveitar o incrível processo de rastrear os planetas da lua<br></br><br></br></p>
                </div>
            </section>
            <section className={Styles.recomendacao}>
                <h1> Outras recomendações </h1>
                <div className={Styles.carrossel}>
                    <a href='#' className={Styles.fotinhas}>
                        <img src={imagem1} />
                    </a>
                    <a href='#' className={Styles.fotinhas}>
                        <img src={imagem2} />
                    </a>
                    <a href='#' className={Styles.fotinhas}>
                        <img src={imagem3} />
                    </a>
                </div>
            </section>

        </section>
    )
}
export default Produtos