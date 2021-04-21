import React, { useState, useEffect } from 'react';
import './TweetInfo.scss';

import ShareButton from './ShareButton'

import * as TwitterAPI from "../utils/TwitterAPI";
import { map, filter } from "lodash";

function  TweetInfo(props){

    const [twitterData, setTwitterData] = useState(null);

    useEffect(() => {
        setTwitterData(searchTwitter);
      }, []);

    const searchTwitter = (query) => {
        return TwitterAPI.searchTweets(query);
      };

    //   const twitterDataGrab = map(twitterData) => ({
    //     text: tweet.text,
    //     id: tweet.id,
    //     count: tweet.public_metrics.retweet_count,
    //   })

    return (
        <div className="tweet-art-container" >
            <img src="" alt=""/>

            <div className="tweet-info-container">
                {/* Profile pic */}
                <div>

                </div>

                {/* Twitter name and handle */}
                <div>

                </div>

                {/* Tweet words and hashtags */}
                <div>

                </div>
            </div>

            {/* Share button */}

        </div>
    )
}

export default TweetInfo;