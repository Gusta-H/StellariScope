import Styles from '../css/Carrossel_observatorio.module.css'
import imagem1 from '../imagens/imagem1.png'
import imagem2 from '../imagens/imagem2.png'
import imagem3 from '../imagens/imagem3.png'
import imagem4 from '../imagens/imagem4.png'
import imagem5 from '../imagens/imagem5.png'
import imagem6 from '../imagens/imagem6.png'


function Carrossel_observatorio() {
  const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6];

  return (
    <section className={Styles.banner2}>
      <section className={Styles.wrapper}>
        <div className={Styles.slider}>
          {}
            {imagens.map((img, index) => (
              <div className={Styles.imgitem} key={`primeira-${index}`}>
                <img src={img} alt={`imagem${index + 1}`} />
              </div>
            ))}
          {/* Segundo loop (duplicação para o carrossel infinito) */}
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

export default Carrossel_observatorio
