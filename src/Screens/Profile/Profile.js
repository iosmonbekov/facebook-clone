import React from "react";
import MyPosts from "./Components/MyPosts/MyPosts";
import ProfileData from "./Components/ProfileData";
import "./Profile.css";

export default function Profile(props) {
  return (
    <div className="profile">
      <ProfileData />
      <MyPosts
        data={props.data}
        addPost={props.addPost}
        newPostText={props.newPostText}
        setNewPostText={props.setNewPostText}
      />
    </div>
  );
}
