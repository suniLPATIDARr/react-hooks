import './App.css';
import ComponentCustom from "./Components/useRef/focusInput";

function App() {
  return (
    <div className="App">
        <ComponentCustom st={<button>Click</button>}>
        <h1>children</h1>
        </ComponentCustom>
    </div>
  );
}

export default App;
