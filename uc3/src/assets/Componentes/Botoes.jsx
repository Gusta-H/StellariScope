import { Link } from 'react-router-dom';
import Styles from '../css/Botoes.module.css'

function Botoes(){

    return(
        <>
            <div className={Styles.caixa1}>
                <div className={Styles.botoes}>
                    <Link to='/Loja' className={Styles.botao}>Telescópios</Link>  
                    <Link to='/Binoculos' className={Styles.botao}>Binóculos</Link>  
                    <Link to='/Acessorio' className={Styles.botao}>Acessórios</Link>   
                </div>
            </div>
        </>
    )
}

export default Botoes