import { useState } from "react";
import { addJuego } from "./../services/api";
import "./../styles/gameform.css";

const GameForm = ({ onClose, onAdded }) => {
  const [juego, setJuego] = useState({ nombre: "", fechaLanzamiento: "", desarrollador: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fechaLanzamiento") {
      // Convertimos la fecha seleccionada al formato LocalDateTime
      const fechaISO = new Date(value).toISOString().slice(0, 19); // yyyy-MM-ddTHH:mm:ss
      setJuego({ ...juego, [name]: fechaISO });
    } else {
      setJuego({ ...juego, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJuego(juego);
    onAdded();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Añadir Juego</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
          <input type="date" name="fechaLanzamiento" onChange={handleChange} required />
          <input type="text" name="desarrollador" placeholder="Desarrollador" onChange={handleChange} required />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default GameForm;
