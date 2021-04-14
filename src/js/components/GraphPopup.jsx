import React, { useState } from 'react';
import PropTypes from "prop-types";
import './GraphPopup.scss';
import GraphInfo from './GraphInfo';


function  GraphPopup(props){

    return (
        <div className="graph-popup-container" >
            <div>
                
            <div className="exit-graph">
                X
            </div>

            <p>
                Graph Info
            </p>

            <div>
                <GraphInfo />
            </div>
                
            </div>
        </div>
    )
}

export default GraphPopup;