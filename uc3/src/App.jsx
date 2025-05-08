import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './assets/Componentes/Header.jsx';
import Home from './assets/Componentes/Home.jsx';
import Layout from './assets/Componentes/Layout.jsx';
import Footer from './assets/Componentes/Footer.jsx';
import Aprenda from './assets/Componentes/Aprenda.jsx'

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Aprenda' element={<Aprenda />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
