import * as types from "../actionType";
import axios from "axios";

const fetchPostStart = () => ({
  type: types.FETCH_POST_START,
});

const fetchPostSuccess = (posts) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: posts,
});

const fetchPostFail = (error) => ({
  type: types.FETCH_POST_FAIL,
  payload: error,
});

export const fetchPostDelete = (id) => ({
    type: types.FETCH_POST_DELETE,
    payload: id,
  });
export const fetchPostEdit =(edit) =>({
  type:types.FETCH_POST_EDIT,
  payload:edit,
});
// thunk function returns: calls action creators, calls func instead of action object
export function fetchPosts() {
  return function (dispatch) {
    dispatch(fetchPostStart());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostFail(error.message));
      });
  };
}

//  this module is part of a larger Redux application that handles fetching and storing posts data from an API endpoint.
