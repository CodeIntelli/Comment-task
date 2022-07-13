import {
  COMMENT_FAIL,
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  CLEAR_ERRORS,
} from "../Constants/commentsConstants";

export const commentReducers = (state = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };

    case COMMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


