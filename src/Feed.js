import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Post from './Post';

function Feed(){
    return(
        <div className='feed'>

    {/*Header*/}
    <div className='feed__header' >
    <h2>Home</h2>
    <AutoFixHighIcon className="feed_home"/>
    </div>

    
    {/*Twitter Box*/}
    <TweetBox/>
    <Post/>
    <Post/>
        </div>
    )
}
export default Feed;