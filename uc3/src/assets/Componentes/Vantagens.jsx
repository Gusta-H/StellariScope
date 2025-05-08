import Styles from '../css/Vantagens.module.css'

function Vantagens(){

    return(
        <>            
            <div className={Styles.caixa1}>
                <div className={Styles.box}>
                    <h1>🏡</h1>
                    <h2>Compre sem sair de casa</h2>
                    <p>Adicione os produtos que você quer no seu carrinho. Nós levamos onde você estiver.</p>
                </div>
                <div className={Styles.box}>
                    <h1>💰</h1>
                    <h2>Pague como preferir</h2>
                    <p>Pode escolher entre cartão de débito ou crédito, boleto ou até mesmo no pix.</p>
                </div>
                
                <div className={Styles.box}>
                    <h1>🚛</h1>
                    <h2>Receba sem sair de casa</h2>
                    <p>Comprando conosco, podemos garantir segurança na entrega e sem danos ao seu pedido.</p>
                </div>
           </div>
        </>
    )
}

export default Vantagens