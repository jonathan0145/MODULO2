import logo from './logo.svg';
import './App.css';
import Home from './component/01.Home';
import Propiedades from './component/02.props';
import Welcome from './component/03.componenteDeClase';
import Imagen from './component/04.props';
import Estadosc from './component/05.estadosc';
import Estados from './component/05.estadosf';

var a="imagen", b="perro", c="like"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          jonathan rendon
        </a>
        <Home></Home>
        <Propiedades numero="2"></Propiedades>
        <Propiedades numero="3" abc = "A:"></Propiedades>
        <Propiedades numero="4" abc = "A:" que="wey"></Propiedades>
        <Welcome wel="esto es un componente de clase"></Welcome>
        <Imagen a={a} b={b} c={c}> </Imagen>
        <Estadosc></Estadosc>
        <Estados></Estados>
      </header>
    </div>
  );
}

export default App;
