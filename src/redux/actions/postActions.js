import * as types from "./actionTypes";
import * as postApi from "../../api/postApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPostsSuccess(posts) {
    return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return postApi
            .getPosts()
            .then(posts => {
                dispatch(loadPostsSuccess(posts));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}