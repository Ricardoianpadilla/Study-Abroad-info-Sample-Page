import './css/App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/about";
import Zero from "./pages/1";
import One from "./pages/2";
import Two from "./pages/3";
import Three from "./pages/4";
import Four from "./pages/5";



import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/about" exact element={<About />}/>
          <Route path="/1"  element={<Zero/>}/>
          <Route path="/2"  element={<One/>}/>
          <Route path="/3"  element={<Two/>}/>
          <Route path="/4"  element={<Three/>}/>
          <Route path="/5"  element={<Four/>}/>


        </Routes>
      </Router>
       
   </div>
     
    
  );
}

export default App;
