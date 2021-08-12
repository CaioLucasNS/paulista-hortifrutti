import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation  from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navigation />

        <p>
          Bem vindo ao <code>Paulista Hortifruti</code>
        </p>
        <a
          className="App-link"
          href="/feira"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais saude na sua mesa.
        </a>
      </header>
    </div>
  );
}

export default App;
