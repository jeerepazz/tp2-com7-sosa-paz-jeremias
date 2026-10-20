import ProjectCard from '../components/ProjectCard';

function Projects() {
  const misProyectos = [
    { id: 1, nombre: 'Búnker Financiero', descripcion: 'Gestión de inversiones con C# y SQL.', enlace: '#' },
    { id: 2, nombre: 'Portfolio V1', descripcion: 'Primer portfolio estático en React.', enlace: '#' },
    { id: 3, nombre: 'Gestor de Tutorías', descripcion: 'Plataforma para clases de matemáticas.', enlace: '#' }
  ];

  return (
    <div>
      <h1>Mis Proyectos</h1>
      {misProyectos.map((proyecto) => (
        <ProjectCard 
          key={proyecto.id} 
          nombre={proyecto.nombre} 
          descripcion={proyecto.descripcion} 
          enlace={proyecto.enlace} 
        />
      ))}
    </div>
  );
}

export default Projects;