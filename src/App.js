import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Topbar from './Component/Topbar';
import Home from './Component/Home';
import About from './Component/About';
import Project from './Component/Project';
import Skill from './Component/Skill';
import Contact from './Component/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        {/* <Route path='About' element={<About/>}/> */}
        
      <Route path='/About' element={<About/>}/>
      <Route path='/Skill' element={<Skill/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>

    </Routes>
    <Toaster position="bottom-center"/>
    </BrowserRouter>
    </>
  );
}

export default App;
