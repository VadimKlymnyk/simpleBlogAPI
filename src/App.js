import React, { useEffect, useState } from "react";
import PostList from "./components/PostList.js";
import ViewPost from "./components/ViewPost.js";
import * as requests from "./requests";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  let [data, setData] = useState([]);

  useEffect(async () => {
    let articles = await requests.all();
    setData(articles);
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
