import logo from "./logo.svg";
import "./App.css";
import MyFooter from "./components/MyFooter";
import Pyt from "./components/Pyt";

function App() {
  const myArray = [1,2,3]
  return (
    <div className="App">
      <header className="App-header">
        <Pyt />ghghg
        jgjhgjhgjhh
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
        <h1>Hello world</h1>
      </header>
      {
        myArray.map((n) => (
          <MyFooter number={n}/>
        ))
      }
    </div>
  );
}

export default App;
