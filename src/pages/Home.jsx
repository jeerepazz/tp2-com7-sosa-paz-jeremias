import { useState } from 'react';

function Home() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const toggleInfo = () => {
    setMostrarInfo(!mostrarInfo);
  };

  return (
    <div>
      <h1>Bienvenido al Búnker 🚀</h1>
      <p>Hola, soy Jeremías Sosa Paz, desarrollador y estudiante en la UTN.</p>
      
      <button 
        onClick={toggleInfo} 
        style={{ padding: '10px', marginTop: '20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {mostrarInfo ? "Ocultar Información Extra" : "Ver Más Sobre Mi Perfil"}
      </button>

      {mostrarInfo && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
          <h3>Perfil Profesional</h3>
          <p>Me especializo en construir arquitecturas sólidas con C# y SQL, y desarrollar interfaces dinámicas utilizando React y Node. Mi objetivo es crear sistemas eficientes y escalables.</p>
        </div>
      )}
    </div>
  );
}

export default Home;