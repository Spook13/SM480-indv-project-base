import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import * as TwitterApi from './js/utils/TwitterAPI';

import  Nav from './js/components/Nav';
import  Header from './js/components/Header';
import  Board from './js/components/Board';
import { initial } from "lodash";

function App(props) {


  const [tweets, SetTweets] = useState([]);

  useEffect(() => {
    loadTweets("#art"); 
  }, [])

  // Grabbing from twitter API
  const loadTweets = (hashtag) => {
    TwitterApi.searchTweets(hashtag)
      .then((results) => {
        SetTweets(results);
      })
      .catch((error) => {
        console.log(error);
      })
  };

    return (
      <div className="App">
        <Nav />
        <Header />
        <Board tweetInfo={tweets} />
      </div>
    );
  }

export default App;
