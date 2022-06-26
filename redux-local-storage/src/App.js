import Counter from "./Containers/Counter";
import TestComponent from "./Containers/TestComponent";
import "./App.css";
import { Login } from "./Containers/Login";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <TestComponent />
    </div>
  );
}
