import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterFollowButton
  
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"682202942473019392"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Anushri Eswaran"
          options={{ height: 400 }}
        />
       <TwitterFollowButton
    screenName={'AnushriEswaran'}/>
        <TwitterShareButton
          url={"www.google.com"}
          options={{ text: "Hello", via: "Anushri" }}
        />
      </div>
    </div>
  );
}

export default Widgets;