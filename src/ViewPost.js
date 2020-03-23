import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsPost from "./CommentsPost";

function getPost(id) {
  return fetch(
    `https://simpleblogapi.herokuapp.com/posts/${id}?_embed=comments`
  );
}

const ViewPost = props => {
  let clickPost = useParams();
  let a = [clickPost.id];
  let [poste, setPoste] = useState([]);

  useEffect(async () => {
    let response = await getPost(clickPost.id);
    let res = await response.json();
    setPoste(res);
  }, [clickPost.id]);

  return (
    <div className="container">
      <div className="section_header">
        <h1 className="section_title">{poste.title}</h1>
        <h3 className="section_subtitle">{poste.body}</h3>
      </div>
      <input type="text"></input>
      <button>Add Comment</button>
      <CommentsPost poste={poste} />
    </div>
  );
};
export default ViewPost;
