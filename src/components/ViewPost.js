import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsPost from "../Comments/CommentsPost";
import AddComm from "../Comments/AddComm";
import * as requests from "../requests";
import { connect } from "react-redux";

function ViewPost(props) {
  let clickPost = useParams();
  let [poste, setPoste] = useState([]);

  useEffect(() => {
    //let post = await requests.one(clickPost.id);
    console.log(props.post);
    setPoste(props.post);
    props.getPost(clickPost.id);
  }, [clickPost.id]);

  async function addComment(body) {
    let createComment = {
      postId: poste.id,
      body: body
    };

    let res = await requests.addComment(createComment);

    setPoste({
      title: poste.title,
      body: poste.body,
      id: poste.id,
      comments: [...poste.comments, res]
    });
  }

  return (
    <div>
      {!props.loading ? (
        <div className="container">
          <div className="section_header">
            <h1 className="section_title">{props.post.title}</h1>
            <h3 className="section_subtitle">{props.post.body}</h3>
          </div>
          <AddComm onCreate={addComment} />
          <CommentsPost post={props.post} key={props.post.id} />
        </div>
      ) : (
        <div className="container_items">
          <div class="loader"></div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ post }) => {
  return {
    post: post.data,
    loading: post.loading
    //id: post.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => {
      requests.one(dispatch, id);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost);
