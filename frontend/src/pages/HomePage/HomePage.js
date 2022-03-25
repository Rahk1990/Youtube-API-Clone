import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  


const handleClick = (event, id, title, description) => {
event.preventDefault();
  props.setCurrentVideoDescription(description);
  props.setCurrentVideoId(id);
  props.setCurrentVideoTitle(title);
}
  // useEffect(() => {
    
  // }, []);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to= "/addcomment">Post Comment</Link>
      {props.searchResults.map((video, index) => (
          <div className="container" key={index}>
            <p>{video.snippet.title}</p>
           <div>

              <input className="form" type="image" src={video.snippet.thumbnails.medium.url}
              onClick={(event) => handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description )}
              />

            </div> 
            <p className="container">{video.snippet.description}</p>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
