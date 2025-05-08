import Styles from '../css/Botao_observatorio.module.css'

function botao_observatorio(){

    return(
        <section className={Styles.botao}>
            <a className={Styles.botao1} href='#'>
                Descubra o mais próximo de você
            </a>

            <div className={Styles.scrollDown}>
                <svg className={Styles.scrollIcon} viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>

        </section>
    )
}

export default botao_observatorio