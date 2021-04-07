import React from 'react';
import './Nav.scss';
import hamburger from './hamburger.png';

function  Nav(props){
    return (
        <div className="nav">
            <div className="dropdown">
                <button className="dropbtn">
                    <img className="menu" src={hamburger} alt="menu"/>
                </button>
                <div className="dropdown-content">
                    <a href="#">#Abstract</a>
                    <a href="#">#Architecture</a>
                    <a href="#">#Art</a>
                    <a href="#">#Characterart</a>
                    <a href="#">#Digitalart</a>
                    <a href="#">#Drawing</a>
                    <a href="#">#Literature</a>
                    <a href="#">#Painting</a>
                    <a href="#">#Photography</a>
                    <a href="#">#Sculpture</a>
                </div>
            </div>

            <h3 className="app-name"> Art Search </h3>
        </div>
    )
}

export default Nav;