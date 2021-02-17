import React from "react";
import "./MyPosts.css";
import Post from "../Post/Post";
import { addPostActionCreator, setNewPostText } from "../../../../redux/state";

export default function MyPosts(props) {
  const addPost = () => {
    props.dispatch(addPostActionCreator());
    props.dispatch(setNewPostText(""));
  };
  const onChnageHandler = (text) => {
    props.dispatch(setNewPostText(text));
  };
  return (
    <div className="my-posts">
      <h2>My Posts</h2>
      <textarea
        onChange={(e) => onChnageHandler(e.target.value)}
        placeholder="Your news..."
        value={props.newPostText}
      />
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      {props.data
        .slice(0)
        .reverse()
        .map((el, index) => {
          return <Post key={el.id} text={el.post} />;
        })}
    </div>
  );
}
