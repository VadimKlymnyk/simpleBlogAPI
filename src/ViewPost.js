import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsPost from "./CommentsPost";
import AddComm from "./AddComm";

function getPost(id) {
  return fetch(
    `https://simpleblogapi.herokuapp.com/posts/${id}?_embed=comments`
  );
}

const ViewPost = props => {
  let clickPost = useParams();
  let [poste, setPoste] = useState([]);

  useEffect(async () => {
    let response = await getPost(clickPost.id);
    let res = await response.json();
    setPoste(res);
  }, [clickPost.id]);

  function addComm(body1) {
    console.log(clickPost.id);
    setPoste(
      poste.comments.push({
        bodyId: poste.id,
        body: body1,
        id: poste.comments[poste.comments.length - 1].id + 1
      })
    );
    console.log(poste.comments);
  }

  return (
    <div className="container">
      <div className="section_header">
        <h1 className="section_title">{poste.title}</h1>
        <h3 className="section_subtitle">{poste.body}</h3>
      </div>
      <AddComm onCreate={addComm} />
      <CommentsPost post={poste} />
    </div>
  );
};
export default ViewPost;
