import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ShowDetails from './components/Show/ShowDetails';
import AddDetails from './components/Add/AddDetails';
import Navbar from './components/Navbar/Navbar';
// api url :-https://foodlistlist.herokuapp.com/food
function App() {
  const [show,setShow]=useState(false);

  return (
    <div className="App">
      <Navbar/>
      {show ? <ShowDetails/>:<AddDetails/>}
      <button onClick={()=>setShow(!show)} className="showbtn">{show ?"Add New Restaurant":"Show Restaurants"}</button>
    </div>
  );
}

export default App;
