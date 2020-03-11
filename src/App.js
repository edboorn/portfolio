import React from 'react';
import Space from './Space.jpg';

import './App.css';

function App() {
  return (
    <div className="App" style={{display: "flex"}}>
        <div style={{width : "20%", backgroundColor : '#282c34', color : '#ffffff'}}>
        <h1> Edward Boorn </h1>
        <h2> This will be my portfolio </h2>
        </div>
        <div style={{display : "inline-block"}}><img src={Space} style={{float : "right",width : '100%'}} alt="logo" /></div>
    </div>
  );
}

export default App;
