import React from "react";
function card(props) {
  return (
    <div className="card">
      <img
        src="https://i.ibb.co/61QvVPj/Rectangle-27.png"
        alt="yb"
        className="YellowBox"
      />
      <center>
        <div className="MemberName">{props.name}</div>
      </center>
      <img src={props.src} alt="mimg" className="Members" />
    </div>
  );
}
export default card;
