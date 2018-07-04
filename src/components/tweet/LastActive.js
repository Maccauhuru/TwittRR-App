import React from 'react'
import moment from 'moment';

const LastActive = ({time}) => {
const timeString = moment(time).fromNow();
  return (
    <span className ="time">
      {timeString}
    </span>
  )
}

export default LastActive;