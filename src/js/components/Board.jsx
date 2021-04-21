import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Board.scss';
import { map, filter } from "lodash";

import GraphButton from './GraphButton';
import TweetButton from './TweetButton';
import TwitterPopup from './TwitterPopup';
import GraphPopup from './GraphPopup';



function  Board(props){

    const [showGraphPopup, setShowGraphPopup] = useState(false);

    const [showTweetPopup, setShowTweetPopup] = useState(false);

    const onGraphClick = (id) => {
        console.log("Graph button clicked", id);
        setShowGraphPopup(true);
        return;
    }

    const onTweetClick = (id) => {
        console.log("Tweet button clicked", id);
        setShowTweetPopup(true);
        return;
    }

    const renderTwitterCards = () => {
        // Filters tweets to only have images
        return map(filter(props.tweetInfo, item => !!item.images.length), tweet => (
                <li key={tweet.id}>
                    <GraphButton
                        onClick={onGraphClick}
                        id={tweet.id}
                    />  

                    <TweetButton
                        onClick={onTweetClick}
                        id={tweet.id}
                    /> 

                    <img 
                        className="board-img"
                        src={tweet.images[0].url}
                        alt={tweet.images[0].media_key}
                    />
                </li>
        ));
    }

    return (
        <div className="board-container" >
            <ul>
                {renderTwitterCards()}
            </ul>
            <TwitterPopup 
                show={showTweetPopup}
                hidePopUp={() => setShowTweetPopup(false)}
                onClose={() => setShowTweetPopup(false)}
            />
            <GraphPopup 
                show={showGraphPopup}
                hidePopUp={() => setShowGraphPopup(false)}
                onClose={() => setShowGraphPopup(false)}
            />


            
        </div>
    )
}
 
export default Board;