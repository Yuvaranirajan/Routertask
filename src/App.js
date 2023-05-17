import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Form from './components/form';
import Add from './components/adddec';
import Multicards from './components/multicards';
import About from './components/about';
import Bulb from './components/bulb';
import Navbar from './navbar';
import Home from './components/home';
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/bulb" element={<Bulb/>}/>
       <Route path="/about" element={<About/>}/>
      <Route path="/counter" element={<Add/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/multicard" element={<Multicards/>}/>
     </Routes> 
     </BrowserRouter> 
      
      {/* <Card></Card>
      <Form/>
      <Add/>
      <Multicards></Multicards>
      <About/>
      <Bulb/> */}
  
      
    </div>
  );
}

export default App;
