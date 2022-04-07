import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo roxanna" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            An open code project on{" "}
            <a
              href="https://github.com/annaxor/dictionary-project"
              target="_blank"
            >
              {" "}
              GitHub{" "}
            </a>{" "}
            by{" "}
            <a href="https://roxannaortega.com/" target="_blank">
              Roxanna Ortega Valdivieso
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
