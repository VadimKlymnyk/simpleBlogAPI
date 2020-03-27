import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsPost from "../Comments/CommentsPost";
import AddComm from "../Comments/AddComm";
import * as requests from "../requests";

function createPost(body) {
  return fetch(`https://simpleblogapi.herokuapp.com/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
}

const ViewPost = () => {
  let clickPost = useParams();
  let [poste, setPoste] = useState([]);

  useEffect(async () => {
    let post = await requests.one(clickPost.id);
    setPoste(post);
  }, [clickPost.id]);

  async function addComment(body) {
    let createComment = {
      postId: poste.id,
      body: body
    };

    let respons = await createPost(createComment);
    if (respons.status === 201) {
      let res = await respons.json();

      setPoste({
        title: poste.title,
        body: poste.body,
        id: poste.id,
        comments: [...poste.comments, res]
      });
    }
  }

  return (
    <div className="container">
      <div className="section_header">
        <h1 className="section_title">{poste.title}</h1>
        <h3 className="section_subtitle">{poste.body}</h3>
      </div>
      <AddComm onCreate={addComment} />
      <CommentsPost post={poste} key={poste.id} />
    </div>
  );
};
export default ViewPost;
