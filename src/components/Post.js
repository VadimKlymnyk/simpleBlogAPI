import React from "react";
import { withRouter, Link } from "react-router-dom";


const Post = ({post}) => {

  return (
    //<div className="container_item"  >
      <Link to={`/posts/${post.id}`} className="container_item">
        <div className="container_item_txt">
          <div className="container_item_title">{post.title}</div>
          <div className="container_item_text">{post.body}</div>
        </div>
      </Link>
    //</div>
  );
};
export default withRouter(Post);

/*


*/
