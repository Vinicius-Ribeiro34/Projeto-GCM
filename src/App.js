import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './main'
import 'materialize-css/dist/css/materialize.min.css'
import './main.css';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <Header />
      <Main />
    </div>
  );
}

export default App;
