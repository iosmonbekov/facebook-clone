import React from "react";
import "./MyPosts.css";
import Post from "../Post/Post";

export default function MyPosts(props) {
  const addPost = () => {
    props.addPost();
  };
  const onChnageHandler = (text) => {
    props.changePostText(text);
  };
  return (
    <div className="my-posts">
      <h2>My Posts</h2>
      <textarea
        onChange={(e) => onChnageHandler(e.target.value)}
        placeholder="Your news..."
        value={props.profilePage.newPostText}
      />
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      {props.profilePage.posts
        .slice(0)
        .reverse()
        .map((el, index) => {
          return <Post key={el.id} text={el.post} />;
        })}
    </div>
  );
}
