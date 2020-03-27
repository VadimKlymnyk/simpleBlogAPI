import { GET_POSTS_SUCCESS, GET_POSTS } from "./store/types";

export async function all(dispatch) {
  try {
    dispatch({ type: GET_POSTS });
    let data = await makeRequest("https://simpleblogapi.herokuapp.com/posts");
    //console.log(data)
    dispatch({ type: GET_POSTS_SUCCESS, data });
    return data;
  } catch (error) {
    dispatch({ type: "GET_POSTS_ERROR", error });
  }
}

export async function one(id) {
  let data = await makeRequest(
    `https://simpleblogapi.herokuapp.com/posts/${id}?_embed=comments`
  );
  return data;
}

export async function addComment(body) {
  let data = await makeRequest(`https://simpleblogapi.herokuapp.com/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return data;
}

export async function add(article) {}

export async function edit(id, article) {}

function makeRequest(url, options = {}) {
  return fetch(url, options).then(response => {
    if (response.status !== 200 && response.status !== 201) {
      return response.text.then(text => {
        throw new Error(text);
      });
    }
    return response.json();
  });
}
