import React from 'react'


function getRetweetCount(counter) {
 return (counter > 0)?  (<span className="retweet-count">{counter}</span>) : null;
}

const RetweetButton = ({ counter }) => (
<span className="retweet-button">
<i className="fa fa-retweet"/>
{getRetweetCount(counter)}
</span>
);

export default RetweetButton;
