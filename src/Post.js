import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

// const Post = forwardRef(
//   ({ displayName, username, verified, text, image, avatar }, ref) => {
    function Post({ displayName, username, verified, text, image, avatar }, ref){
    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar src= "https://www.w3schools.com/w3images/avatar5.png"/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Anushri
                <span className="post__headerSpecial">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {'unushri'}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{'Lets Dance'}</p>
            </div>
          </div>
          <img src= "https://media.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }

export default Post;