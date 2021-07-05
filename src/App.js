import './App.css';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur mon application!</h1>
      <ul>
        <Item title="Pizza" />
        <Item title="Jambon" />
        <Item title="Fromage" />
      </ul>
    </div>
  );
}

export default App;
