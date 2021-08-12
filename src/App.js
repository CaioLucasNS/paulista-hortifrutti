import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation  from './components/Navigation/Navigation';
import Promocoes from './components/Navigation/Promocoes';
import ListaDePromocao from './components/Navigation/ListaDePromocao';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navigation />

        <p>
          Bem vindo ao <code>Paulista Hortifruti</code>
        </p>
          Mais saude na sua mesa.
      </header>
      <body>
        <Promocoes />
          <ListaDePromocao />
      </body>
    </div>
  );
}

export default App;
