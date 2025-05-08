import Styles from '../css/Conteudo.module.css'
import foto1 from '../imagens/foto1.png'
import foto2 from '../imagens/foto2.png'
import foto4 from '../imagens/foto4.png'

function Conteudo(){

    return(
        <section className={Styles.conteudo}>
            <section className={Styles.esquerda}>
                <div className={Styles.produto}>
                    <div className={Styles.produto2}>
                        <a href='#' className={Styles.foto}></a>
                        <div className={Styles.nome}>Telescópio N 130/650 Explorer EQ-2</div>

                        <div className={Styles.escolha}>
                            <input className={Styles.numero} type='number' defaultValue='1'></input>
                            <div className={Styles.opcao}>
                                <label className={Styles.opcao}>
                                    <input type="radio" name="tipo" defaultChecked />
                                    <span className={Styles.radio}></span>
                                        Aluguel
                                </label>

                                <label className={Styles.opcao}>
                                    <input type="radio" name="tipo" />
                                    <span className={Styles.radio}></span>
                                        Compra
                                </label>
                            
                            </div>
                        </div>

                        <div className={Styles.preco}>R$ 2.180,00</div>
                    </div>
                </div>

                <div className={Styles.recomendacao}>
                    <div className={Styles.texto}>Recomendações para você</div>
                    <div className={Styles.carrossel}>
                        <a href='#' className={Styles.foto1}>
                            <img src={foto1}/>
                        </a>
                        <a href='#' className={Styles.foto1}>
                            <img src={foto2}/>
                        </a>
    
                        <a href='#' className={Styles.foto1}>
                            <img src={foto4}/>
                        </a>
                        
                    </div>
                </div>
            </section>
            
            <section className={Styles.direita}>
                <div className={Styles.entrega}>
                    <p>Opções de entrega</p>
                    <div className={Styles.cepContainer}>
                        <div className={Styles.cepInput}>
                            <span className={Styles.icon}></span>
                            <input type="text" placeholder="📍Informe seu CEP" className={Styles.cepField} />
                        </div>
                        <button className={Styles.calcularBtn}>Calcular</button>
                    </div>
                </div>
                <div className={Styles.desconto}>
                    <p>Cupom de desconto </p>
                    <div className={Styles.cupomContainer}>
                        <div className={Styles.cupomInput}>
                            <span className={Styles.icon}></span>
                            <input type="text" placeholder="🎟️Código do cupom" className={Styles.cupomField} />
                        </div>
                        <button className={Styles.calcularBtn}>Aplicar</button>
                    </div>
                </div>
                <div className={Styles.resumo}>
                    <p>Resumo do pedido</p>

                    <div className={Styles.resumoCarrinho}>
                    <div className={Styles.linha}>
                        <span>1 Produto</span>
                        <strong>R$ 2.180,00</strong>
                    </div>

                    <div className={Styles.linha}>
                        <span>·Subtotal</span>
                        <strong>R$ 2.180,00</strong>
                    </div>

                    <div className={Styles.linha}>
                        <span>Entrega</span>
                        <input type="text" placeholder="Digite o CEP" className={Styles.inputCep}/>
                    </div>

                    <hr className={Styles.divisor} />

                    <div className={Styles.linhaTotal}>
                        <strong>Total:  </strong>
                        <strong>R$ 2.180,00</strong>
                    </div>

                    <button className={Styles.botaoFinalizar}>Finalizar compra</button>
                    <button className={Styles.botaoContinuar}>Continuar comprando</button>
                </div>

                </div>
            </section>
        </section>
    )
}

export default Conteudo