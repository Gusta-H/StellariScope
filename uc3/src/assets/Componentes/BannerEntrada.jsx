import Styles from '../css/BannerEntrada.module.css'

function BanerEntrada (){

    return(
        <section className={Styles.baner1}>
            <div className={Styles.texto1}> Descubra o universo<br></br> mais perto do que nunca</div>
            <div className={Styles.texto2}>Um lugar dedicado à contemplação e ao estudo do cosmos, onde <br></br>cada estrela observada carrega uma história e cada descoberta <br></br>aproxima o universo de nós.</div>

        </section>
    )

}

export default BanerEntrada