import "./card.css";
import { useNavigate } from "react-router-dom";

import React from "react";

function TeamCard(post) {
  //handling route
  const navigate = useNavigate();

  function HandleClick() {
    navigate("/create");
  }
  console.log(post.post);

  return (
    <div className="wrapper">
      <div className="matchTop">
        <span>{post.post.game}</span>
      </div>
      <div className="matchMiddle">
        <img src="Assets/kkr.png" alt="" className="img1" />
        <span className="time">{post.post.Time} min left</span>
        <img src="Assets/csk.png" alt="" className="img2" />
      </div>
      <div className="matchBottom">
        <span className="team1">{post.post.Team1} </span>
        <span className="team_creation" onClick={HandleClick}>
          Create Team
        </span>
        <span className="team2">{post.post.Team2}</span>
      </div>
    </div>
  );
}

export default TeamCard;
