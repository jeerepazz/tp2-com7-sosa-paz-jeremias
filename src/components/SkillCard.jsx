function SkillCard({ nombre, nivel }) {
  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' }}>
      <h3>{nombre}</h3>
      <p>Nivel: {nivel}</p>
    </div>
  );
}

export default SkillCard;