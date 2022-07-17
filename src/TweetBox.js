import { Button, Avatar } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            fontSize="small"
          />
          <input
            placeholder="What's happening?"
            className="button__axel"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          type="text"
          className="tweetBox__inputImage"
        />
        <Button className="tweetBox__button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
