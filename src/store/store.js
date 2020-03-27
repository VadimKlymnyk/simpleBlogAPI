import { createStore, combineReducers} from "redux";
import { GET_POSTS, GET_POSTS_SUCCESS } from "./types";

/*
function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
*/

function posts(state = { data: [], error: null, loading: true }, action) {
  switch (action.type) {

    case GET_POSTS:
      return {...state, loading:true };
    case GET_POSTS_SUCCESS:
      return {...state, loading:false, data: action.data};
    case "GET_POSTS_ERROR":
        return {...state, loading:false, error:action.error};
    default:
      return state;
  }
}

const reducers = combineReducers({
    posts
  })

let store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));


export default store;
