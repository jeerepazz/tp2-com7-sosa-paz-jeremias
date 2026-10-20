import SkillCard from '../components/SkillCard';

function Skills() {
  const misHabilidades = [
    { id: 1, nombre: 'React', nivel: 'Avanzado' },
    { id: 2, nombre: 'JavaScript', nivel: 'Avanzado' },
    { id: 3, nombre: 'C#', nivel: 'Intermedio' },
    { id: 4, nombre: 'SQL', nivel: 'Intermedio' }
  ];

  return (
    <div>
      <h1>Mis Habilidades</h1>
      {misHabilidades.map((skill) => (
        <SkillCard 
          key={skill.id} 
          nombre={skill.nombre} 
          nivel={skill.nivel} 
        />
      ))}
    </div>
  );
}

export default Skills;