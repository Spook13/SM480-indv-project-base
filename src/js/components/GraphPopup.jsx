import React, { useState } from 'react';
import './GraphPopup.scss';
import GraphInfo from './GraphInfo';


function  GraphPopup(props){

    if(!props.show) {
        return null;
    }

    return (
        <div className="tweet-info-container" >
            <div>
                
            <div className="exit">
                X
            </div>

            <p>
                Graph Info
            </p>

            <div className="graph-container">
                <GraphInfo />
            </div>
                
            </div>
        </div>
    )
}

export default GraphPopup;