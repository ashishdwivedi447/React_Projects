
import "./App.css";
import Counter from "./components/Counter";


function App() {
  return (
    <div className="App">
      <Counter initialProp={30} finalProp={120}/>
    </div>
  );
}

export default App;