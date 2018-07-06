import React from 'react'
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import LikeButton from './LikeButton';
import MoreOptionsButton from './MoreOptionsButton';

const Buttons= ({count,counter}) => {
  return (
    <div className="buttons">
      <ReplyButton />
      <RetweetButton counter={counter}/>
      <LikeButton count={count}/>
      <MoreOptionsButton />
    </div>
  )
}

export default Buttons;
