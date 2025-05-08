import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './assets/Componentes/Header.jsx';
import Home from './assets/Componentes/Home.jsx';
import Layout from './assets/Componentes/Layout.jsx';
import Footer from './assets/Componentes/Footer.jsx';
import Aprenda from './assets/Componentes/Aprenda.jsx'
import Main from './assets/Componentes/Main.jsx'  
import Acessorio from './assets/Componentes/Main_acessorio.jsx'
import Binoculos from './assets/Componentes/Main_binoculos.jsx'
import Carrinho from './assets/Componentes/Carrinho.jsx';
import Equipe from './assets/Componentes/Main_Sobre.jsx'
import Planetario from './assets/Componentes/Main_planetario.jsx'
import Observatorio from './assets/Componentes/Observatorio.jsx'
import Dados from './assets/Componentes/Dados.jsx'
import Produto from './assets/Componentes/Produtos1.jsx'
function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Aprenda' element={<Aprenda />} />
          <Route path='/Loja' element={<Main />} />
          <Route path='/Acessorio' element={<Acessorio />} />
          <Route path='/Binoculos' element={<Binoculos />} />
          <Route path='/Carrinho' element={<Carrinho />} />
          <Route path='/Sobre' element={<Equipe />} />
          <Route path='/Planetario' element={<Planetario />} />
          <Route path='/Observatorio' element={<Observatorio />} />
          <Route path='/Dados' element={<Dados />} />
          <Route path='/Produto' element={<Produto />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
