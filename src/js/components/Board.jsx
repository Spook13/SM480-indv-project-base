import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Board.scss';
import Button from './Button';
import TwitterPopup from './TwitterPopup';
import GraphPopup from './GraphPopup';


function  Board(props){

    // const [showPopup, setShowPopup] = useState(false);

    const onButtonClick = (popupClick) => {
        console.log("button clicked");
        // setShowPopup(true);
        return;
    }

    return (
        <div className="container" >
            <ul>
                <li>
                    <Button 
                        onClick={onButtonClick}
                    />

                    <Button 
                        onClick={onButtonClick}
                    />

                    <img src="" alt=""/>
                </li>
            </ul>
            <TwitterPopup />
            <GraphPopup />


            
        </div>
    )
}
 
export default Board;