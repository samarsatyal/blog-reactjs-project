import "./singlePost.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Single() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:4000/images/";
  const { user } = useContext(Context); //import and use 'user' from the Context.js file so that if the current Single Post is from the same user, then the user will be able to edit & delete the post.
  const [title, setTitle] = useState(""); //user to be able to edit the blog title
  const [description, setDescription] = useState(""); //user to be able to edit the blog description
  const [updateMode, setUpdateMode] = useState(false); //when 'edit' button is clicked, the current post will be changed to update mode.

  useEffect(() => {
    const getPost = async () => {
      //path from line 10
      const res = await axios.get("/posts/" + path, {
        username: user.username,
      });
      setPost(res.data);
      //When the "edit" mode is set, the input provided by the user (in title and description form) will be taken as the new data.
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getPost();
  }, [path]);

  //For the current user to be able to delete their own post.
  const handleDelete = async () => {
    try {
      //takes the 'posts' api + path = location.pathname.split("/")[2] to delete the current post
      await axios.delete("/posts/" + path, {
        data: { username: user.username },
      });
      window.location.replace("/"); //once the post is deleted; redirect to homepage.
    } catch (err) {}
  };

  //Once user updates the Post title and description, the handleUpdate will be invoked when the 'Update' button is clicked.
  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + path, {
        username: user.username,
        title,
        description,
      });
      window.location.reload(); //once the data is updated, reload the single post (or Write) page with the up-to-date data.
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={publicFolder + post.photo}
            alt=""
            className="singlePostImg"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fas fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{post.description}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
