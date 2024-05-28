import React from 'react';

function Dashboard({ onLogout }) {
  return (
    <div>
      <h1>Bienvenido al Sistema</h1>
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;
