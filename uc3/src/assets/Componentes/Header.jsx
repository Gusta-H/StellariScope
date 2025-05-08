import { Link } from 'react-router-dom';
import Styles from '../css/Header.module.css'

function Header(){

    return(
        
        <header>
            <a href="#" className={Styles.logo}></a>

            <nav id="navegar">
                <ul>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/Loja'>Produtos</Link></li>
                    <li>
                        <a href="#">Explorar ▾</a>
                        <ul className={Styles.dropdown}>
                            <li><a href="#">Planetários</a></li>
                            <li><a href="#">Observatórios</a></li>
                        </ul>
                        </li>
                    <li><Link to='/Aprenda'>Aprenda</Link></li>
                    <li><Link to='/Sobre'>Sobre nós</Link></li>
                </ul>  
            </nav>
            <a href="#" className={Styles.user}></a>
            <Link to='/Carrinho' className={Styles.car}></Link>
            
        </header>
    )
}

export default Header