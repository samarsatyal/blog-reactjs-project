import React, { Component } from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDec">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores
        tenetur suscipit possimus quidem, eos mollitia veritatis odio ad minus
        nesciunt sint earum dolore amet et aut, illum quis. Omnis? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolorum maiores tenetur
        suscipit possimus quidem, eos mollitia veritatis odio ad minus nesciunt
        sint earum dolore amet et aut, illum quis. Omnis? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolorum maiores tenetur suscipit
        possimus quidem, eos mollitia veritatis odio ad minus nesciunt sint
        earum dolore amet et aut, illum quis. Omnis?
      </p>
    </div>
  );
}
