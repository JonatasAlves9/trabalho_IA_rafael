import React, { useEffect } from 'react'
import logo from '../logo.svg';
import '../App.css';
import tree from '../services/tree'

const arvore = {};

function ChooseMovies() {

  useEffect(() => {
    tree(arvore, 10);
    tree(arvore, 11);
    tree(arvore, 9);
    console.log(arvore)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Escolha seu filme preferido
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar
        </a>
      </header>
    </div>
  );
}

export default ChooseMovies;
