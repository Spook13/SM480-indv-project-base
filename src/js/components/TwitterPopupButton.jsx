import React from 'react';
import ReactDOM from 'react-dom';
import './TwitterPopupButton.scss';

function  TwitterPopupButton(props){
    function popupClick(e) {
        ;
    }

    return (
        <div className="circle"  onClick={popupClick}>
            ...   
        </div>
    )
}
 
export default TwitterPopupButton;