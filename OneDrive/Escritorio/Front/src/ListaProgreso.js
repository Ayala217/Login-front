import React, { useState, useEffect } from "react";
import ConexionService from './Servicios/ConexionService';  

import './ListaProyecto.css'; 
import { Link } from "react-router-dom";
import { FaFilm, FaPlus, FaSearch } from 'react-icons/fa';

export const ListaProgreso = () => {
    const [auditoria_progreso, setProgreso] = useState([]);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        
        ConexionService.getAllProgreso()
            .then(response => {
                console.log("Datos recibidos del backend:", response.data);
                setProgreso(response.data);
            })
            .catch(error => console.error("Error al obtener auditorías:", error));
    }, []);

    
    const progresoFiltrado = auditoria_progreso.filter(auditoria_progreso =>
        auditoria_progreso.nombreProyecto && auditoria_progreso.nombreProyecto.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className="list-proyecto-container">
            <aside className="sidebar">
                <h2 className="menu">Menú</h2>
                <Link to="/Listar" className='btn-primary'><FaFilm /> Listar Proyectos</Link>
                <Link to='/Listar-equipos' className='btn-primary'><FaFilm /> Listar Equipos</Link>
                <Link to='/Listar-progreso' className='btn-primary'><FaPlus /> Ver progreso</Link>
                <Link to='/add-proyecto' className='btn-primary'><FaPlus /> Agregar Proyecto</Link>
                <Link to='/add-equipo' className='btn-primary'><FaPlus /> Agregar Equipo</Link>
            </aside>

            <main className="content">
                <div className="header">
                    <h1>Lista de Auditorías de Proyectos</h1>
                </div>

                <div className="search-container">
                    <label htmlFor="buscar-proyecto"><FaSearch /> Buscar Proyecto:</label>
                    <input
                        type="text"
                        id="buscar-proyecto"
                        placeholder="Ingrese el nombre del proyecto"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    />
                </div>

                <hr />

                <div className="table-container">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Estado Anterior</th>
                                <th>Estado Actual</th>
                                <th>Fecha y Hora de Cambio</th>
                                <th>Usuario que Realizó el Cambio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {progresoFiltrado.length > 0 ? (
                                progresoFiltrado.map((progreso, index) => (
                                    <tr key={index}>
                                    <td>{progreso.nombreProyecto || "Título no definido"}</td>  {/* Cambiar de titulo a nombreProyecto */}
                                    <td>{progreso.estadoAnterior || "Estado anterior no definido"}</td>
                                    <td>{progreso.nuevoEstado || "Estado actual no definido"}</td>  {/* Cambiar de estadoActual a nuevoEstado */}
                                    <td>
                                        {progreso.fechaHoraCambio
                                            ? new Date(progreso.fechaHoraCambio).toLocaleDateString('es-ES') + " " + new Date(progreso.fechaHoraCambio).toLocaleTimeString('es-ES')
                                                : "Fecha no definida"}
                                    </td>

                                    <td>{progreso.usuarioCambio || "Usuario no definido"}</td>
                                </tr>
                                
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No se encontraron auditorías</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default ListaProgreso;
