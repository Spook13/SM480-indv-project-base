import React, { useState } from 'react';
import './TweetInfo.scss';

function  TweetInfo(props){

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

export default TweetInfo;