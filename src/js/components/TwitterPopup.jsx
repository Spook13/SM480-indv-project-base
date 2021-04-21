import React from 'react';
import PropTypes from "prop-types";
import './TwitterPopup.scss';
import TweetInfo from './TweetInfo';

function  TwitterPopup(props){

    if(!props.show) {
        return null;
    }

    return (
        <div className="twitter-popup-container" >
            <div className="twitter-info-container">
                
                <div 
                    className="exit-tweet"
                    onClick={props.hidePopUp}
                >
                    X
                </div>

                <p className="art-text"> 
                    Art Info
                </p> 

                <TweetInfo />
            </div>
        </div>
    )
}

TwitterPopup.propTypes = {
    show: PropTypes.bool,
    // for hiding pop up
    hidePopUp: PropTypes.func,
}
 
export default TwitterPopup;