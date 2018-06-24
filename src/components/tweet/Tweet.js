import React from 'react';
import Avatar from './Avatar';
import Message from './Message';
import HandleName from './HandleName';

const Tweet=()=>{
return(
    <div className='tweet'>
    <Avatar/>
    <div className="content" >
    <HandleName/>
    <Message />
    </div>
    </div>
)
}

export default Tweet;