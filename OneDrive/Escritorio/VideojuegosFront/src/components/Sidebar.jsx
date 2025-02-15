import "./../styles/sidebar.css";

const Sidebar = ({ onAdd,onClick }) => {
  return (
    <aside className="sidebar">
      <button className="add-button" onClick={onAdd}>Añadir Juego</button>
     
    </aside>
  );
};


export default Sidebar;
