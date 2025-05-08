
import BannerEntrada from '../Componentes/BannerEntrada'
import Carrossel_observatorio from '../Componentes/Carrossel_observatorio'
import Carrossel_observatorio2 from '../Componentes/Carrossel_observatorio2'
import Botao from '../Componentes/Botao_observatorio'
import BannerConteudo from '../Componentes/BannerConteudos'

function Observatorio() {

    return( 
      <main>
        <BannerEntrada />
        <Carrossel_observatorio />
        <Carrossel_observatorio2 />
        <Botao />
        <BannerConteudo />
      </main>
    )
  }
  
  export default Observatorio
  