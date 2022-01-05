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
                  {'Anushri1206'}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{'Sample tweet text'}</p>
            </div>
          </div>
          <img src= "https://images.unsplash.com/photo-1640702149643-d172d1463fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" />
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