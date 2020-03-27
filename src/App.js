import React, { useEffect, useState } from "react";
import PostList from "./components/PostList.js";
import ViewPost from "./components/ViewPost.js";
import * as requests from "./requests";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.getPosts();
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
            {!props.loading ? (
              <PostList posts={props.posts} />
            ) : (
              <div className="container_items">
                <div class="loader"></div>
              </div>
            )}
          </Route>
          <Route exact path="/posts/:id">
            <ViewPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.data,
    loading: posts.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      requests.all(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
