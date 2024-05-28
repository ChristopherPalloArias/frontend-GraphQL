import React from 'react';

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <h2>Bienvenido al Sistema de GraphQL</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
