import "./App.css";
import Counter from "./components/counter";
import Display from "./components/display";

function App() {
  return (
    <div className="App">
      <header className="App-header">S5-06</header>
      <main>
        <section>
          <Display />
          <Counter />
        </section>
      </main>
    </div>
  );
}

export default App;
