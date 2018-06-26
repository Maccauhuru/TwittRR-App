import React from 'react'
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreOptionsButton from './MoreOptionsButton';

const Buttons= () => {
  return (
    <div className="buttons">
      <ReplyButton />
      <RetweetButton />
      <LikeButton />
      <MoreOptionsButton />
    </div>
  )
}

export default Buttons;
