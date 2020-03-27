import React from "react";

const CommentsPost = ({post}) => {
  //console.log(props);
  let a = post.comments;
  //console.log(a);
  return (
    <div className="container_items">
      {a &&
        a.map(b => {
          return <div className="container_item">{b.body}</div>;
        })}
    </div>
  );
};

export default CommentsPost;
