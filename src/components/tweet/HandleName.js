import React from 'react';
import PropTypes from 'prop-types';

const HandleName = ({ handleName , name }) => {
  const showHandleName = `@${handleName}`
  return (
    <span className="handle-name">
        <span className="name">{name}</span>
        <span className="handle">{showHandleName}</span>
    </span>
  )
}

HandleName.propTypes ={
  name : PropTypes.string.isRequired,
  handleName : PropTypes.string.isRequired
}


export default HandleName;