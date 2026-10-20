import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="Sidebar">
      <h2>Búnker de Jeremías</h2>
      <nav style={{ marginTop: '40px' }}>
        <NavLink to="/" className="nav-link">🏠 Home</NavLink>
        <NavLink to="/about" className="nav-link">👤 Sobre Mí</NavLink>
        <NavLink to="/skills" className="nav-link">🛠️ Habilidades</NavLink>
        <NavLink to="/projects" className="nav-link">💻 Proyectos</NavLink>
        <NavLink to="/contact" className="nav-link">📧 Contacto</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;