import './App.css';

function App(): JSX.Element {
  return (
    <main className="App">
      <h1>ReactJS + TypeScript + Docker</h1>

      <form>
        <section>
          <label htmlFor="name">
            Nome completo: <input type="text" id="name" />
          </label>
        </section>

        <section>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" />
          </label>
        </section>
      </form>
    </main>
  );
}

export default App;
