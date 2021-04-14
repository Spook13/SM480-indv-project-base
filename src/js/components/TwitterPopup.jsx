import React, { useState } from 'react';
import PropTypes from "prop-types";
import './TwitterPopup.scss';
import TweetInfo from './TweetInfo';

function  TwitterPopup(props){

    return (
        <div className="twitter-popup-container" >
            <div className="exit-tweet">
                X
            </div>

            <p>
                Art Info
            </p> 

            <div className="art-img">
                <img src="" alt=""/>
            </div>

            <TweetInfo />
        </div>
    )
}

TwitterPopup.propTypes = {

}
 
export default TwitterPopup;