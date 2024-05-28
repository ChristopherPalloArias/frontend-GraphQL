import React from 'react';

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>This is a protected route.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
