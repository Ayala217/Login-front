
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProyecto from './ListaProyecto';
import AñadirProyecto from './AñadirProyecto';
import ListarEquipos from './ListarEquipos';
import AñadirEquipo from './AñadirEquipo';
import ListaProgreso from './ListaProgreso';
import Inicio from './Inicio';
import ActualizarProgreso from './ActualizarProgreso';
function App() {
  return (
   <div>
     <Router>
      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/Listar" element={<ListaProyecto />} />
        <Route path="/Listar-equipos" element={<ListarEquipos />} />
        <Route path="/add-proyecto" element={<AñadirProyecto />} />
        <Route path="/add-equipo" element={<AñadirEquipo />} />
        <Route path="/Listar-progreso" element={<ListaProgreso />} />
        <Route path="/Actualizar-progreso" element={<ActualizarProgreso />} />
        

      </Routes>
    </Router>
   </div>
  );
}

export default App;
