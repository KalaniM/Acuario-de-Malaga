import React from 'react';
import './App.css';
import Nav from './comp/nav';
import Landing from './comp/landing';

function App() {
  return ( <div className="App">
    <header className="App-header">
      <Nav/>
    </header>
    <Landing/>
  </div> );
}

export default App;
