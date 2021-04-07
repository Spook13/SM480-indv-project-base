import React from 'react';
import ReactDOM from 'react-dom';
import './PopupButton.scss';

function  PopupButton(props){
    function popupClick(e) {
        ;
    }

    return (
        <div className="circle"  onClick={popupClick}>
            ...   
        </div>
    )
}
 
export default PopupButton;