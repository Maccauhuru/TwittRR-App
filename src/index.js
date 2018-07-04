import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './components/tweet/Tweet';
import './index.css';
import TestTweet from './components/seed/TestTweet';



ReactDOM.render(<Tweet tweet={TestTweet}/>, document.getElementById('root'));

