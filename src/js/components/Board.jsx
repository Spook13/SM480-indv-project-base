import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Board.scss';
import PopupButton from './PopupButton'
import Popup from './Popup'

function  Board(props){

    const [showPopup, setShowPopup] = useState(false);

    const onButtonClick = (popupClick) => {
        setShowPopup(true);
        return;
    }

    return (
        <div className="container" >
            <ul>
                <li>
                    <PopupButton 
                        onClick={onButtonClick}
                    />
                    <img src="" alt=""/>
                </li>
                <li>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Popup
                show={showPopup}
                hidePopUp={() => setShowPopup(false)}
                onClose={() => setShowPopup(false)}
             />
            
        </div>
    )
}
 
export default Board;