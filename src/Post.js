import React from "react";
import { withRouter, Link } from "react-router-dom";


const Post = props => {

  return (
    //<div className="container_item"  >
      <Link to={`/posts/${props.post.id}`} className="container_item">
        <div className="container_item_txt">
          <div className="container_item_title">{props.post.title}</div>
          <div className="container_item_text">{props.post.body}</div>
        </div>
      </Link>
    //</div>
  );
};
export default withRouter(Post);

/*


*/
