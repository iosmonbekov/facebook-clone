import React from "react";
import "./User.css";

export default function User(props) {
  return (
    <div className="user">
      <div>
        <div
          className="user_photo"
          style={{
            background: `url(${props.photo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {props.followed ? (
          <button onClick={() => props.followToHim(props.id)}>Follow</button>
        ) : (
          <button onClick={() => props.followToHim(props.id)}>UnFollow</button>
        )}
      </div>

      <div>
        <div className="user_info">
          <span>{props.name}</span>
          <span>{props.status}</span>
        </div>
        <div className="user_location">
          <span>{props.city}</span>
          <span>{props.country}</span>
        </div>
      </div>
    </div>
  );
}
