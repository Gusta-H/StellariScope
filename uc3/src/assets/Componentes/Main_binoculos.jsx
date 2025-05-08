import Styles from '../css/Main.module.css'
import Banner1 from '../Componentes/Banner1'
import Botoes from '../Componentes/Botoes'
import Binoculos from '../Componentes/Binoculos'
import Produtos from '../Componentes/Produtos'
import Marca from '../Componentes/Marca'
import Vantagens from '../Componentes/Vantagens'

function Main() {

    return( 
      <main className={Styles.Main}>
      <Banner1 />
      <Botoes />
      <Binoculos />
      <Produtos />
      <Marca />
      <Vantagens />
      </main>
      
    )
  }
  
  export default Main