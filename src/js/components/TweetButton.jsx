import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import './TweetButton.scss';

const TWEET_ICON = require("../../images/tweet-icon.png");

function  TweetButton(props){

    const handleClick = (e) => {
        console.log("Button -- handleClick: ", e);
        if(props.onClick) {
          props.onClick(props.id);
        }
      } 

    return (
        <button 
            className="circle"
            onClick={handleClick}
            title="View tweet info"
        > 
          <img 
          className="graph-icon-img"
          src={TWEET_ICON.default}
          alt="Graph Icon"
          />
        </button>
    )
}
 
export default TweetButton;