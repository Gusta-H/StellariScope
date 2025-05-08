import Styles from '../css/PropsConteudo.module.css'

function PropsConteudo({titulo, texto, link}){
    return(
        <section className={Styles.caixa}>
            <div className={Styles.titulo}>{titulo} </div>
            <div className={Styles.texto}>{texto}</div>
            <a className={Styles.botao2} href={link} target='_blank'> Saiba mais </a>
        </section>
    )
}

export default PropsConteudo