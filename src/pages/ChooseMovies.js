import logo from '../logo.svg';
import '../App.css';

function ChooseMovies() {
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
