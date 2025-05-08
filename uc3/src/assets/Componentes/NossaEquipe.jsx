import Styles from '../css/NossaEquipe.module.css'
import Foto from '../imagens/allan.png'
import Foto1 from '../imagens/bruna.png'
import Foto2 from '../imagens/dennis.png'
import Foto3 from '../imagens/gustavo.png'
import Foto4 from '../imagens/isa.png'
import Foto5 from '../imagens/matheus.png'
import Foto6 from '../imagens/mariana.png'
import link from '../imagens/linkedin.png'


function NossaEquipe() {
    return (
        <section className={Styles.camada2}>
            <div className={Styles.titulo3}>
                <p>Nossa equipe</p>
            </div>
            <div className={Styles.parte1}>
                <div className={Styles.foto}>
                    <img src={Foto} alt="" />
                    <div className={Styles.conteudo}>
                        <div className={Styles.cargo}>
                            TRIPULANTE
                            <h2>Allan Victor</h2>
                        </div>
                        <div className={Styles.linkedin}>
                            <img src={link} alt="" /> 
                            <a href='https://www.linkedin.com/in/allan-victor-31a76125a/' target='_blank'>Allan Victor</a>
                        </div>
                    </div>
                </div>

                <div className={Styles.foto}>
                    <img src={Foto1} alt="" />
                    <div className={Styles.conteudo}>
                        <div className={Styles.cargo}>
                            TRIPULANTE
                            <h2>Bruna Santos</h2>
                        </div>
                        <div className={Styles.linkedin}>
                            <img src={link} alt="" />
                            <a href='https://www.linkedin.com/in/brunas-limaa-/' target='_blank'>Bruna Santos</a>
                        </div>
                    </div>
                </div>

                <div className={Styles.foto}>
                    <img src={Foto2} alt="" />
                    <div className={Styles.conteudo}>
                        <div className={Styles.cargo}>
                            TRIPULANTE
                            <h2>Dennis Obata</h2>
                        </div>
                        <div className={Styles.linkedin}>
                            <img src={link} alt="" />
                            <a href='https://www.linkedin.com/in/dennis-obata/' target='_blank'>Dennis Obata</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.parte2}>
                <div className={Styles.foto}>
                    <img src={Foto6} alt="" />
                    <div className={Styles.conteudo}>
                        <div className={Styles.cargo}>
                            TRIPULANTE
                            <h2>Mariana Milagre</h2>
                        </div>
                        <div className={Styles.linkedin}>
                            <img src={link} alt="" />
                            <a href='https://www.linkedin.com/in/mariana-milagre/' target='_blank'>Mariana Milagre</a>
                        </div>
                    </div>
                </div>

                <div className={Styles.foto}>
                    <img src={Foto4} alt="" />
                    <div className={Styles.conteudo}>
                        <div className={Styles.cargo}>
                            TRIPULANTE
                            <h2>Isabelle Pinheiro</h2>
                        </div>
                        <div className={Styles.linkedin}>
                            <img src={link} alt="" />
                            <a href='https://www.linkedin.com/in/isabelle-vieira-pinheiro/' target='_blank'>Isabelle Pinheiro</a>
                        </div>
                    </div>
                </div>

                <div className={Styles.foto}>
                    <img src={Foto5} alt="" />
                    <div className={Styles.conteudo}>
                        <div className={Styles.cargo}>
                            TRIPULANTE
                            <h2>Matheus Papini</h2>
                        </div>
                        <div className={Styles.linkedin}>
                            <img src={link} alt="" />
                            <a href='https://www.linkedin.com/in/matheus-papini-2065a7356/' target='_blank'>Matheus Papini</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.parte3}>
                <div className={Styles.foto}>
                    <img src={Foto3} alt="" />
                    <div className={Styles.conteudo}>
                        <div className={Styles.cargo}>
                            COMANDANTE
                            <h2>Gustavo Henrique</h2>
                        </div>
                        <div className={Styles.linkedin}>
                            <img src={link} alt="" />
                            <a href='https://www.linkedin.com/in/gustavo-henrique-santos-proano/' target='_blank'>Gustavo Henrique</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NossaEquipe