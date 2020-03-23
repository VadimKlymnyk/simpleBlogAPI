import React, { useEffect, useState } from "react";
import PostList from "./PostList.js";
import ViewPost from "./ViewPost.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function getData() {
  return fetch("https://simpleblogapi.herokuapp.com/posts");
}

function App() {
  let [data, setData] = useState([]);

  useEffect(async () => {
    let response = await getData();
    let res = await response.json();
    //console.log(response);
    //console.log(res);
    setData(res);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <h1>View Post</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <PostList posts={data} />
          </Route>
          <Route exact path="/posts/:id">
            <ViewPost posts={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
