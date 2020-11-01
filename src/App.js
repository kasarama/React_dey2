import "./App.css";
import Count from "./ex1";
import Joke from "./joke";
import AllMembers from "./ListDemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        _-_-_-_-_-_-_-_-_-_-_-_-_-_-_
        <br />
        <br />
        <Joke />
        <br />
        <AllMembers />
      </header>
    </div>
  );
}

export default App;
