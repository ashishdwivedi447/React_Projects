import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navabar/Navbar';
import Footer from './components/footer/Footer';
import DataSlider from './components/Slider/DataSlider';
import AboutUs from './components/AboutUs';
import Men from './components/men/Men';
import Women from './components/women/Women';
import Kids from './components/kids/Kids';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DataSlider/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
