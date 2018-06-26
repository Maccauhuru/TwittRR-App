import React from 'react';
import Avatar from './Avatar';
import Message from './Message';
import HandleName from './HandleName';
import LastActive from './LastActive';
import Buttons from './Buttons';

const Tweet=()=>{
return(
    <div className='tweet'>
    <Avatar/>
    <div className='content'>
    <HandleName/><LastActive />
    <Message />
    <Buttons />
    </div>
   
    
    </div>
)
}

export default Tweet;