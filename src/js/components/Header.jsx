import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';

function  Header(props){

    return (
            <div className="under-line" >
                <div className="dropdown">
                    <button className="dropbtn">
                        <p className= "hashtag"> 
                            #{props.hashtag} 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </p>

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
                
            </div>
    )
}

Header.propTypes = {
    // eslint-disable-next-line no-undef
    // hashtag: PropTypes.string.isRequired,
}
export default Header;