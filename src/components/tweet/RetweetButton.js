import React from 'react'


function getRetweetCount(counter) {
if(counter > 0) {
return (
<span className="retweet-count">
{counter}
</span>
);
} else {
return null;
}
}

const RetweetButton = ({ counter }) => (
<span className="retweet-button">
<i className="fa fa-retweet"/>
{getRetweetCount(counter)}
</span>
);

export default RetweetButton;
