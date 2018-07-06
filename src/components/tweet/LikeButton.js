import React from 'react';

const LikeButton = ({ count }) => (
<span className="like-button">
<i className="fa fa-heart"/>
<span className="like-count">
{count ? count : null}
</span>
</span>
);

export default LikeButton;