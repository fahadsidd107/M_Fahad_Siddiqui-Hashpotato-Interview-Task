import React from 'react';
import logo from './logo.svg';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className="App">
      <main className="main">
  <div className="content_left">
<Left/>
  </div>
  <div className="content_right">
<Right/>
  </div>

      </main>
    </div>
  );
}

export default App;
