import Styles from '../css/Carrinho.module.css'
import Entrada from '../Componentes/Entrada'
import Conteudo from '../Componentes/Conteudo'

function Carrinho(){

    return(
       <section className={Styles.carrinho}>
        <Entrada/>
        <Conteudo/>
       </section>
    )
}

export default Carrinho