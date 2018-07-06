import React from 'react';

const Avatar = ({hash}) => {
const url = `https://secure.gravatar.com/avatar/${hash}`;
  return (
    <div>
    <img src={url} className="avatar" alt="avatar" />
    </div>
  )
}
export default Avatar;