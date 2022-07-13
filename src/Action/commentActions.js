import {
  COMMENT_FAIL,
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/commentsConstants";
import axios from "axios";

// Load User
export const loadComment = () => async (dispatch) => {
  try {
    dispatch({ type: COMMENT_REQUEST });

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/1/comments`
    );

    dispatch({ type: COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COMMENT_FAIL, payload: error.response.data.message });
  }
};

// Clearing Errors

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
