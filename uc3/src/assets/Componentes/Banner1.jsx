import Styles from '../css/Banner1.module.css'
import Carrossel from '../Componentes/Carrossel1'

function Banner1(){

    return(
        <>
            <div className={Styles.caixa1}>
                <Carrossel /> 
            </div>
        </>
    )
}

export default Banner1