import React from "react";

const CommentsPost = props => {
  let a = props.poste.comments;

  return (
    <div className="container_items">
      {a &&
        a.map(b => {
            return (
                <div className="container_item">{b.body}</div>
            );
        })}
    </div>
  );
};

export default CommentsPost;
