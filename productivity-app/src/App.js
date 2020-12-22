import logo from './logo.svg';
import './App.css';
import Countdown from './Components/Timer.jsx'

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
      <Countdown  key={10} tiempo={10}/>
      <Countdown  key={5} timpo={5}/>
      <Countdown  key={20} timpo={5}/>
      </header>
    </div>
  );
}

export default App;
