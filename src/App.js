import logo from './logo.svg';
import './App.css';

const flag = false;
const count = 34;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'green',
          fontSise: 16 + 24
        }}>
         Hello World!
        </p>
         <p>{count}</p>
         <p>{24}</p>
         <p>{flag ? 'Flag is true' : 'Flag is false'}</p>
         <p>{flag && 'Flag is true'}
         {undefined}
         {null}
         {false}
         {true}
         </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
