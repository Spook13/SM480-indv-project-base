import React from 'react';
import './Nav.scss';
import hamburger from './hamburger.png';

function  Nav(props){
    return (
        <div className="nav">
            <button>
                <h3 className="app-name"> Art Search </h3>
            </button>
        </div>
    )
}

export default Nav;