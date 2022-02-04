import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import Cars from "./components/Cars";
import Like from "./components/Like"
//routes je kao switch,a route case
//browserRouter sluzi kao omotac-sve rute moraju da buduu okviru njega
import { BrowserRouter, Routes, Route } from "react-router-dom";

//use state je za kuke
import { useState } from "react";

function App() {
  const [likedNum, setLikedNum] = useState(0);
  //inicijalno stanje prazan niz
  const [likedCars, setLikedCars] = useState([]);
  const [cars] = useState([
    {
      id: 1,
      title: "Citroen",
      img:"https://www.renderhub.com/squir/citroen-ds3-2015-vray/citroen-ds3-2015-vray.jpg",
      description:  "Model: DS3 Boja: Gray  Godiste: 2010",
      amount: 0,
    },
   
    {
      id: 2, 
      title: "Renault",
      img:"https://images.netdirector.co.uk/gforces-auto/image/upload/w_200,h_200,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/8d02e903bdc1f6a9beb6cb8c06298807/renault_clio_thumbnail.jpg",
      description:
      "Model: CLIO Boja: Orange Godiste: 2013",
      amount: 0,
    },
     {
      id: 3,
      title: "Audi", 
      img:"https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/KicAAOSwTUlhwSDh/$_1.PNG",
      description:
      "Model: A3 Boja: Gray Godiste: 2007",
      amount: 0,
      
    },
  ]);
  function refreshLiked() {
    let newCars = cars.filter((c) => c.amount > 0);
    setLikedCars(newCars);
  }


  function addCar(title,id) {
     console.log("Lajkovan je auto: " + title);
   setLikedNum(likedNum + 1);
   cars.forEach((c) => {
    if (c.id === id) {
      c.amount++;
    }
    console.log(c.amount);
  });
  refreshLiked();}
  
  function removeCar(title,id) {
    if (likedNum > 0) {
    console.log("Dislajkovan je auto: " + title);
  setLikedNum(likedNum -1);
  cars.forEach((c) => {
    if (c.id === id) {
      c.amount--;
    }
    console.log(c.amount);
});}
   else{alert("Broj lajkova je vec 0." );
 }   refreshLiked();}  


  return (
    <BrowserRouter className="App">
      <NavBar likedNum={likedNum}></NavBar>
      
      
       <Routes>
<Route path='/' element={<>
<h2 className='naslov1'>Odaberite auto godine 2022!</h2>
<Cars cars={cars} onAdd={addCar} onDelete={removeCar}/>
</>} />
<Route path='/like' element={ <Like cars={likedCars}/> }/>

      </Routes>


    </BrowserRouter>
  );
}

export default App;
