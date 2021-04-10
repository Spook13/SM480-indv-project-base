import React, { useState } from 'react';
import './GraphPopup.scss';

function  GraphPopup(props){

    if(!props.show) {
        return null;
    }

    return (
        <div className="tweet-info-container" >
            <div>
                
            </div>
        </div>
    )
}

export default GraphPopup;