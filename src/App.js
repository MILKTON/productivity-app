import logo from './logo.svg';
import './App.css';
import Stopwatch from "./components/Stopwatch/Stopwatch";

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
          Learn React
        </a>
        <Stopwatch key={5} h={0} m={0} s={5}/>
        <Stopwatch key={4} h={0} m={1} s={0}/>
      </header>
    </div>
  );
}

export default App;
