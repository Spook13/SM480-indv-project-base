import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Board.scss';

import GraphButton from './GraphButton';
import TweetButton from './TweetButton';
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
        <div className="board-container" >
            <ul>
                <li>
                    <GraphButton
                        className="tweet-button"
                        onClick={onButtonClick}
                    >     
                    <img src="" alt=""/>
                    </GraphButton>  

                    <TweetButton
                        className="tweet-button"
                        onClick={onButtonClick}
                    >
                    </TweetButton> 

                    <img 
                        className="board-img"
                        src="" 
                        alt=""
                    />
                </li>
            </ul>
            <TwitterPopup />
            <GraphPopup />


            
        </div>
    )
}
 
export default Board;