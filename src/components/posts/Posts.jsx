import Post from "../post/Post";
import "./posts.css";
import React, { Component } from "react";

export default function Posts() {
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
