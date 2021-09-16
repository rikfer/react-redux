import * as types from "./actionTypes";
import * as commentApi from "../../api/commentApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createCommentSuccess(comment) {
    return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function loadCommentsSuccess(comments) {
    return { type: types.LOAD_COMMENTS_SUCCESS, comments };
}

export function createComment(comment) {
    return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function loadComments() {
    return function(dispatch, getState) {
        dispatch(beginApiCall());
        return commentApi.getComments()
          .then(comments => {
            dispatch(loadCommentsSuccess(comments));
          })
          .catch(error => {
            dispatch(apiCallError(error));
            throw error;
          });
      };
}