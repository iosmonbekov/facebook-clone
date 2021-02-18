import React from "react";
import MyPosts from "./Components/MyPosts/MyPosts";
import ProfileData from "./Components/ProfileData";
import "./Profile.css";

export default function Profile(props) {
  return (
    <div className="profile">
      <ProfileData />
      <MyPosts
        profilePage={props.profilePage}
        changePostText={props.changePostText}
        addPost={props.addPost}
      />
    </div>
  );
}
