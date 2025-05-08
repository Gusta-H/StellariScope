import Styles from '../css/Footer.module.css'

function Footer(){

    return(
        <footer>
            <div className={Styles.conteudo}>
                <a className={Styles.logo} href="#"></a>
                <div className={Styles.linha}></div>

                <div className={Styles.conteudo1}>
                    <a className={Styles.info} href="#"> ✦Início </a>
                    <a className={Styles.info} href="#"> ✦Produtos </a>
                    <a className={Styles.info} href="#"> ✦Explorar </a>
                </div>

                <div className={Styles.conteudo2}>
                    <a className={Styles.info} href="#"> ✦Sobre nós </a>
                    <a className={Styles.info1} href="#"> ✦Institucional </a>
                    <a className={Styles.info1} href="#"> ✦Nossa equipe </a>
                </div>
                <div className={Styles.redes}>
                    <a className={Styles.instagram} href="#"></a>
                    <a className={Styles.facebook} href="#"></a>
                    <a className={Styles.twitter} href="#"></a>
                    
                </div>
            </div>
            <div className={Styles.direitos}>
                © 2025 Todos os direitos reservados
            </div>
        </footer>
    )
}

export default Footer