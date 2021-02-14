import React, { useState } from "react";
import "./MyPosts.css";
import Post from "../Post/Post";

export default function MyPosts(props) {
  const [list, setList] = useState(props.data);
  const [text, setText] = useState("");

  const addPost = () => {
    if (text) {
      setList([...list, text]);
      setText("");
    }
  };
  return (
    <div className="my-posts">
      <h2>My Posts</h2>
      <textarea
        placeholder="Your news..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      {list
        .slice(0)
        .reverse()
        .map((el, index) => {
          return <Post key={index} text={el} />;
        })}
    </div>
  );
}
