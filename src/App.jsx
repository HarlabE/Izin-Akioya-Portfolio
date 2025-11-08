import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
// import Nav from './components/nav';
import NavBar from './components/navbar';
import 'normalize.css';

const App = () => {
  return (
    <Router>
      <NavBar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        </Routes>
    </Router>
  );
}

export default App;
