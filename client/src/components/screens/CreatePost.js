import React, { useState } from "react";
import "./CreatePost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const submitPost = () => {};
  return (
    <div className="postCard">
      <h3>Create Post</h3>

      <form className="signInCard">
        <h5>Title</h5>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h5>Caption</h5>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows="4"
          cols="30"
        ></textarea>

        <h5>Choose image to upload</h5>
        <input type="file" accept="image/png, image/jpeg , image/jpg" />

        <button
          type="submit"
          onClick={submitPost}
          className="login__signInButton"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
