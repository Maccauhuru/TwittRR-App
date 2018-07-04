import React from 'react'

const HandleName = ({ handleName , name }) => {
  const showHandleName = `@${handleName}`
  return (
    <span className="handle-name">
        <span className="name">{name}</span>
        <span className="handle">{showHandleName}</span>
    </span>
  )
}


export default HandleName;