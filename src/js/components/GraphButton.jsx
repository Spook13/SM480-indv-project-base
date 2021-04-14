import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import './GraphButton.scss';


function GraphButton(props){

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
        > 
        
        </button>
    )
}
 
export default GraphButton;