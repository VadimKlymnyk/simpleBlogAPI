import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentsPost from "./CommentsPost";
import AddComm from "./AddComm";

function getPost(id) {
  return fetch(
    `https://simpleblogapi.herokuapp.com/posts/${id}?_embed=comments`
  );
}

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
    let response = await getPost(clickPost.id);
    let res = await response.json();
    setPoste(res);
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

    //console.log(poste);
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
