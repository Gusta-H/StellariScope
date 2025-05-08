import Styles from '../css/Carrossel_observatorio2.module.css'
import retangulo1 from '../imagens/retangulo1.png'
import retangulo2 from '../imagens/retangulo2.png'
import retangulo3 from '../imagens/retangulo3.png'

function Carrossel_observatorio2() {
  const imagens = [retangulo1, retangulo2, retangulo3];

  return (
    <section className={Styles.banner3}>
      <section className={Styles.wrapper1}>
        <div className={Styles.slider}>
          {/* Primeiro loop */}
          {imagens.map((img, index) => (
            <div className={Styles.imgitem} key={`primeira-${index}`}>
              <img src={img} alt={`imagem${index + 1}`} />
            </div>
          ))}
          {/* Segundo loop (duplicação) */}
          {imagens.map((img, index) => (
            <div className={Styles.imgitem} key={`segunda-${index}`}>
              <img src={img} alt={`imagem-duplicada${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Carrossel_observatorio2
