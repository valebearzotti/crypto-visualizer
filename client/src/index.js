import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bitcoin from './pages/Currencies/Bitcoin';
import Ethereum from './pages/Currencies/Ethereum';
import Cardano from './pages/Currencies/Cardano';
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/signup" element={ <SignUp /> } />
        <Route exact path="/currency/bitcoin" element={ <Bitcoin /> } /> 
        <Route exact path="/currency/ethereum" element={ <Ethereum /> } />
        <Route exact path="/currency/cardano" element={ <Cardano /> } /> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

