import axios from "axios";

const PROYECTO_BASE = "http://localhost:8080/Proyectos";
const EQUIPO_BASE = "http://localhost:8080/Equipos/Proyectos";
const AÑADE_EQUIPO = "http://localhost:8080/Equipo";
const AÑADE_PROYECTO = "http://localhost:8080/Proyecto";
const AUDITORIA = "http://localhost:8080/auditoria";

class ConexionService {
    getAllProyectos() {
        return axios.get(PROYECTO_BASE);
    }

    getAllProgreso() {
        return axios.get(AUDITORIA);
    }

    getAllEquipos() {
        return axios.get(EQUIPO_BASE);
    }

    addEquipos(equipo) {
        return axios.post(AÑADE_EQUIPO, equipo);
    }

    addProyecto(proyecto) {
        return axios.post(AÑADE_PROYECTO, proyecto);
    }

    actualizarProgreso(id, progresoDTO) {
        return axios.post(`${PROYECTO_BASE}/${id}/progreso`, progresoDTO);
    }
}

export default new ConexionService();
