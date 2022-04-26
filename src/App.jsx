import logo from './logo.svg';
import './App.css';
import{Button} from "./components/button.jsx"
import{Bootton} from "./components/button.jsx"
import{Buutton} from "./components/button.jsx"
import{Botton} from "./components/button.jsx"


function App() {
  return (
    <div className="App">
     <Button>Primary Button</Button>
     <Buutton>Default Button</Buutton>
     <Botton>Dashed Button</Botton>
     <Bootton> Text Button</Bootton>
    </div>
  );
}

export default App;
