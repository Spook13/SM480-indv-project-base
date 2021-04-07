import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import  Nav from './js/components/Nav';
import  Header from './js/components/Header';
import  Board from './js/components/Board';

function App(props) {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Board />
      </div>
    );
  }

export default App;
