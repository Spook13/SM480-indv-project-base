import React, { useState } from 'react';
import './GraphInfo.scss';
import LineChart from './LineChart';

function  GraphInfo(props){

    return (
        <div className="tweet-info-container" >
            <LineChart />
        </div>
    )
}

export default GraphInfo;