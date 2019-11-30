import React from "react";
import CreatePost from "../components/CreatePost";


// 
const Post = (event) => {
  console.log(event.target)
  return <div className="common"><CreatePost/></div>
};

export default Post;
