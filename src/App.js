import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Cars from "./components/Cars";

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <h2 className='naslov1'>Odaberite auto godine 2022!</h2>
      <Cars/>
    </div>
  );
}

export default App;
