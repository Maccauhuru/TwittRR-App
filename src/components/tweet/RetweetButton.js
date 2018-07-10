import React from 'react';
import PropTypes from 'prop-types';

function getRetweetCount(counter) {
 return (counter > 0)?  (<span className="retweet-count">{counter}</span>) : null;
}

const RetweetButton = ({ counter }) => (
<span className="retweet-button">
<i className="fa fa-retweet"/>
{getRetweetCount(counter)}
</span>
);

RetweetButton.propTypes = {
    counter : PropTypes.number
}

export default RetweetButton;
