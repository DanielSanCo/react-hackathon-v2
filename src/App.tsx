import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import CadastroGrupo from './components/grupos/CadastroGrupo';
import NavBar from "./components/NavBar";
import CadastroProjeto from './components/projetos';
import CadastroTurma from './components/turmas/CadastroTurma';
import Home from './pages/Home';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="/formularioProjeto" element={<CadastroProjeto />} />
          <Route path="/formularioGrupo" element={<CadastroGrupo />} />
          <Route path="/formularioTurma" element={<CadastroTurma />} />

          {/*<Route path="/formularioPostagem/:id" element={<CadastroPost />} />


          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />*/}

        </Routes>
      </Router>
  );
}

export default App;