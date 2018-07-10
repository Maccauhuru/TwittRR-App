import React from 'react'
import moment from 'moment';
import PropTypes from 'prop-types';

const LastActive = ({time}) => {
const timeString = moment(time).fromNow();
  return (
    <span className ="time">
      {timeString}
    </span>
  )
}

export default LastActive;

LastActive.propTypes = {
  time : PropTypes.string.isRequired
}