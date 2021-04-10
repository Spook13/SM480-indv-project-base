import React, { useState } from 'react';
import './SharePopup.scss';

function  SharePopup(props){

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

export default SharePopup;