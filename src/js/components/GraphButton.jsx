import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import './GraphButton.scss';

const GRAPH_ICON = require("../../images/graph-icon.png");


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
            title="Show Graph"
        > 
        <img 
          className="graph-icon-img"
          src={GRAPH_ICON.default}
          alt="Graph Icon"
          />
        </button>
    )
}
 
export default GraphButton;