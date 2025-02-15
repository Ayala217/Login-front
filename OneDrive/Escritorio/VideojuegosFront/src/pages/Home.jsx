import { useState } from "react";
import Sidebar from "../components/Sidebar";
import GameList from "../components/GameList";
import GameForm from "../components/GameForm";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [reload, setReload] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onAdd={() => setShowForm(true)} />
      <GameList key={reload} />
      {showForm && <GameForm onClose={() => setShowForm(false)} onAdded={() => setReload(!reload)} />}
    </div>
  );
};

export default Home;
