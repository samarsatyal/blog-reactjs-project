import "./singlePost.css";
import React, { Component } from "react";

export default function Single() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Samar</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptates esse quisquam tempora, quia mollitia
          obcaecati dignissimos doloribus vitae rem corrupti. Ullam adipisci
          fugiat nemo porro, architecto dolorum animi cum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Necessitatibus voluptates esse
          quisquam tempora, quia mollitia obcaecati dignissimos doloribus vitae
          rem corrupti. Ullam adipisci fugiat nemo porro, architecto dolorum
          animi cum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus voluptates esse quisquam tempora, quia mollitia
          obcaecati dignissimos doloribus vitae rem corrupti. Ullam adipisci
          fugiat nemo porro, architecto dolorum animi cum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Necessitatibus voluptates esse
          quisquam tempora, quia mollitia obcaecati dignissimos doloribus vitae
          rem corrupti. Ullam adipisci fugiat nemo porro, architecto dolorum
          animi cum?
        </p>
      </div>
    </div>
  );
}
