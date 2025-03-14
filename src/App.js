import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <div className="hero text-center">
          <h1>Dictionary</h1>
          <h2>Type a word to know its meaning </h2>
          <form>
            <input className="m-2" type="search" placeholder="Type here..." />
            <input className="m-2" type="submit" value="Search" />
          </form>
        </div>
      </main>
      <footer />
    </div>
  );
}

export default App;
