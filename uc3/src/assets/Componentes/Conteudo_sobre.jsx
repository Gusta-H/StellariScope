import Styles from '../css/Conteudo_sobre.module.css'

function Conteudo() {
    return (
        <section className={Styles.camada}>
            <div className={Styles.titulo}>Sobre nós</div>
            <div className={Styles.texto}>Stellariscope busca não apenas inovar mas satisfazer o cliente mostrando a ele muito além do que o olho humano pode ver. Stellariscope é além, é a possibilidade de enxergar muita mais, com respeito e integridade.</div>
        </section>
    )
}

export default Conteudo