import React from 'react';
import UserList from './UserList';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <h1 className='users' >Users</h1>
      <UserList />
      <footer className='users'> Powered by King_Yahassane</footer>
    </div>
    
  );
}

export default App;
