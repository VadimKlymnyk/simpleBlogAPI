import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsPost from "./CommentsPost";
import AddComm from "./AddComm";

function getPost(id) {
  return fetch(
    `https://simpleblogapi.herokuapp.com/posts/${id}?_embed=comments`
  );
}

const ViewPost = () => {
  let clickPost = useParams();
  let [poste, setPoste] = useState([]);

  useEffect(async () => {
    let response = await getPost(clickPost.id);
    let res = await response.json();
    setPoste(res);
  }, [clickPost.id]);

  function addComm(body1) {
    console.log(body1);
    setPoste({
      title: poste.title,
      body: poste.body,
      id: poste.id,
      comments: poste.comments.concat({
        bodyId: poste.id,
        body: body1,
        id: poste.comments[poste.comments.length - 1].id + 1
      })
    });
    console.log(poste);
  }

  return (
    <div className="container">
      <div className="section_header">
        <h1 className="section_title">{poste.title}</h1>
        <h3 className="section_subtitle">{poste.body}</h3>
      </div>
      <AddComm onCreate={addComm} />
      {console.log(poste)}
      <CommentsPost post={poste} key={poste.id} />
    </div>
  );
};
export default ViewPost;
