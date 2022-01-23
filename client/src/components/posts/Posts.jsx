import Post from "../post/Post";
import "./posts.css";
import React, { Component } from "react";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
