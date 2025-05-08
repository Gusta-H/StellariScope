import Styles from '../css/Caracteristica.module.css'

function Caracteristica() {
    return (
        <section className={Styles.camada1}>
            <div className={Styles.container}>
                <div className={Styles.flip}>
                    <div className={Styles.frente}>
                        <p>MISSÃO</p>
                    </div>

                    <div className={Styles.tras}>
                        <p>Disseminar e facilitar informações sobre instrumentos e lugares para observação do espaço.</p>
                    </div>
                </div>
            </div>

            <div className={Styles.container}>
                <div className={Styles.flip}>
                    <div className={Styles.frente}>
                        <p>VISÃO</p>
                    </div>

                    <div className={Styles.tras}>
                        <p>Expandir cada vez mais informações de localidades, realizar excursões pelos locais citados para que mais pessoas possam ter acesso a lugares de observação e planetários incríveis.</p>
                    </div>
                </div>
            </div>

            <div className={Styles.container}>
                <div className={Styles.flip}>
                    <div className={Styles.frente}>
                        <p>VALORES</p>
                    </div>

                    <div className={Styles.tras}>
                        <p>Satisfação do cliente, inovação, respeito e integridade.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Caracteristica