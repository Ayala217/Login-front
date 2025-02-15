import { useEffect, useState } from "react";
import { getJuegos } from "./../services/api";
import "./../styles/gamelist.css";

const GameList = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getJuegos();
      setJuegos(data);
    };
    fetchData();
  }, []);

  return (
    <div className="game-list">
      <h2>Lista de Juegos</h2>
      <ul>
        {juegos.map((juego, index) => (
          <li key={index} className="game-item">
            <h3>{juego.nombre}</h3>
            <p>Fecha: {juego.fechaLanzamiento}</p>
            <p>Desarrollador: {juego.desarrollador}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
