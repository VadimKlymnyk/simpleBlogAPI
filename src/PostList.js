import React from "react";
//import PropTypes from 'prop-types';
import Post from "./Post";

const PostList = props => {
  return (
    <div className="container_items">
      {props.posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
export default PostList;
