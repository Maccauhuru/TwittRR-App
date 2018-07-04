import React from 'react';
import Avatar from './Avatar';
import Message from './Message';
import HandleName from './HandleName';
import LastActive from './LastActive';
import Buttons from './Buttons';


const Tweet=({ tweet })=>{
return(
    <div className='tweet'>
    <Avatar hash={tweet.gravatar}/>
    <div className='content'>
    <HandleName handleName={tweet.author.handle} name={tweet.author.name}/><LastActive time={tweet.timestamp}/>
    <Message text={tweet.message} />
    <Buttons />
    </div>
    </div>
)
}



export default Tweet;