import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <footer className="m-2 text-center">
        <p>
          Coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/135692-malory-mezierre"
            target="_blank"
            rel="noreferrer"
          >
            Miss Malory
          </a>
          📖, open-sourced on{" "}
          <a
            href="https://github.com/malory171/miss-malory-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://missmalory-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
