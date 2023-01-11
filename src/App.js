import Activities from "./components/Activities";

function App() {
  return (
    <div id="container">
      <div id="top">
        <header>
          Fitness Tracker
        </header>
        <nav>
          <ul>
            <li><a href="#">Routines</a></li>
            <li><a href="#">Activites</a></li>
          </ul>
        </nav>
      </div>

      <Activities />
    </div>
  );
}

export default App;
