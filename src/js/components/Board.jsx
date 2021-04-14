import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Board.scss';
import { map } from "lodash";

import GraphButton from './GraphButton';
import TweetButton from './TweetButton';
import TwitterPopup from './TwitterPopup';
import GraphPopup from './GraphPopup';



function  Board(props){

    const [showPopup, setShowPopup] = useState(false);

    const onButtonClick = (id) => {
        console.log("button clicked", id);
        setShowPopup(true);
        return;
    }

    const renderTwitterCards = () => {
        return map(props.tweetInfo, tweet => (
                <li key={tweet.id}>
                    <GraphButton
                        className="tweet-button"
                        onClick={onButtonClick}
                        id={tweet.id}
                    />  

                    <TweetButton
                        className="tweet-button"
                        onClick={onButtonClick}
                        id={tweet.id}
                    /> 

                    <p>{tweet.id}</p>

                    <img 
                        className="board-img"
                        src="" 
                        alt=""
                    />
                </li>
        ));
    }

    return (
        <div className="board-container" >
            <ul>
                {renderTwitterCards()}
            </ul>
            <TwitterPopup />
            <GraphPopup />


            
        </div>
    )
}
 
export default Board;