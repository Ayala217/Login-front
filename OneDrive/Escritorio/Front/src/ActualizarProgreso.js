import React, { useState, useEffect } from "react";
import ConexionService from "./Servicios/ConexionService";
import { Link } from "react-router-dom";
import { FaFilm, FaSyncAlt, FaPlus } from "react-icons/fa";

const ActualizarProgreso = () => {
    const [proyectos, setProyectos] = useState([]);
    const [proyectoId, setProyectoId] = useState("");
    const [nuevoEstado, setNuevoEstado] = useState("");
    const [porcentajeCompletado, setPorcentajeCompletado] = useState("");
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        ConexionService.getAllProyectos()
            .then((response) => {
                console.log(response.data); // Verifica que los proyectos están llegando correctamente
                setProyectos(response.data);
            })
            .catch((error) => console.error("Error al cargar proyectos:", error));
    }, []);

    const actualizarProgreso = (e) => {
        e.preventDefault();

        // Validaciones simples
        if (!proyectoId || !nuevoEstado.trim() || !porcentajeCompletado) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        const progresoDTO = {
            etapa: nuevoEstado,
            porcentajeCompletado: parseInt(porcentajeCompletado),
            fechaActualizacion: new Date().toISOString().split("T")[0], // Fecha en formato yyyy-MM-dd
            proyecto: { id: Number(proyectoId) }, // Asegúrate de convertir a número antes de enviarlo
        };

        // Enviar solicitud al backend
        ConexionService.actualizarProgreso(proyectoId, progresoDTO)
            .then(() => {
                setMensaje("Progreso actualizado correctamente.");
                setNuevoEstado("");
                setPorcentajeCompletado("");
                setProyectoId("");
            })
            .catch((error) => {
                console.error("Error al actualizar el progreso:", error.response ? error.response.data : error);
                setMensaje("No se pudo actualizar el progreso.");
            });
    };

    return (
        <div className="list-proyecto-container">
            <aside className="sidebar">
                <h2 className="menu">Menú</h2>
                <Link to="/Listar" className='btn-primary'><FaFilm /> Listar Proyectos</Link>
                <Link to='/Listar-equipos' className='btn-primary'><FaFilm /> Listar Equipos</Link>
                <Link to='/Listar-progreso' className='btn-primary'><FaPlus /> Ver progreso</Link>
                <Link to='/add-proyecto' className='btn-primary'><FaPlus /> Agregar Proyecto</Link>
                <Link to='/add-equipo' className='btn-primary'><FaPlus /> Agregar Equipo</Link>
                <Link to='/Actualizar-progreso' className='btn-primary'><FaPlus /> Actualizar progreso</Link>
            </aside>

            <main className="form">
                <div className="title-container">
                    <h1 className="title">Actualizar Progreso</h1>
                </div>
                <hr />
                <form onSubmit={actualizarProgreso}>
                    <div className="form-group">
                        <label>Ingresar ID del Proyecto</label>
                        <input
                            type="number"
                            value={proyectoId}
                            onChange={(e) => setProyectoId(e.target.value)}
                            placeholder="Ingrese el ID del proyecto"
                            min="1"
                        />
                    </div>

                    <div className="form-group">
                        <label>Nuevo Estado del Progreso</label>
                        <input
                            type="text"
                            value={nuevoEstado}
                            onChange={(e) => setNuevoEstado(e.target.value)}
                            placeholder="Ingrese la etapa"
                        />
                    </div>

                    <div className="form-group">
                        <label>Porcentaje Completado</label>
                        <input
                            type="number"
                            value={porcentajeCompletado}
                            onChange={(e) => setPorcentajeCompletado(e.target.value)}
                            placeholder="Ingrese el porcentaje (0-100)"
                            min="0"
                            max="100"
                        />
                    </div>

                    <button type="submit" className="btn-submit">
                        Actualizar Progreso
                    </button>
                </form>

                {mensaje && <div className="mensaje">{mensaje}</div>}
            </main>
        </div>
    );
};

export default ActualizarProgreso;
