import React, { useState } from "react";
import "./TweetBox.css";
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
function TweetBox() {
 
  return (
    <div className="tweetBox">
<form>
        <div className="tweetBox__input">
        <AccountCircleIcon/>
        <input
            placeholder="What's happening?"
            type="text"
          /> 
        </div>
        <div className="float-container">
        <ImageIcon className="float-child"/>
        <GifBoxOutlinedIcon className="float-child"/>
        <PollOutlinedIcon className="float-child"/>
        <SentimentSatisfiedAltOutlinedIcon className="float-child"/>
        <ScheduleOutlinedIcon className="float-child"/>
        <AddLocationOutlinedIcon className="float-child"/>

        <Button
        //   onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;