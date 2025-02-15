import axios from "axios";

const API_URL = "/backend"; 

export const getJuegos = async () => {
  const response = await axios.get(API_URL + "/Juegos"); // ✅ CORREGIDO
  return response.data;
};

export const addJuego = async (juego) => {
  await axios.post(API_URL + "/Juego", juego); // ✅ CORREGIDO
};