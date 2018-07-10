import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './components/tweet/Tweet';
import './index.css';
import Seed from './components/seed/Seed';



ReactDOM.render(<Tweet tweet={Seed}/>, document.getElementById('root'));

