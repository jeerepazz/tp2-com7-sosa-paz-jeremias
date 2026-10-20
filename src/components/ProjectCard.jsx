function ProjectCard({ nombre, descripcion, enlace }) {
  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' }}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <a href={enlace} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
    </div>
  );
}

export default ProjectCard;