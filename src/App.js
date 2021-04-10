import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


import  Nav from './js/components/Nav';
import  Header from './js/components/Header';
import  Board from './js/components/Board';
import  Popup from './js/components/Popup';

function App(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
      <div className="App">
        <Nav />
        <Header />
        <Board />
        <Popup
                // show={showPopup}
                // hidePopUp={() => setShowPopup(false)}
                // onClose={() => setShowPopup(false)}
             />
      </div>
    );
}

export default App;
