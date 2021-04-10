import React, { useState } from 'react';
import './GraphInfo.scss';

function  GraphInfo(props){

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

export default GraphInfo;