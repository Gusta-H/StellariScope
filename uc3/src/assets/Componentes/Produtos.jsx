import Styles from '../css/Produtos.module.css'

function Produtos(){

    return(
        <>
            <div className={Styles.caixa1}>
                <div className={Styles.conteiner}>
                    <a href="#" className={Styles.box1}></a>
                    <a href="#" className={Styles.box2}></a>
                </div>
                <div className={Styles.conteiner}>
                    <a href='#' className={Styles.box3}></a>
                </div>
            </div>
        </>
    )
}

export default Produtos