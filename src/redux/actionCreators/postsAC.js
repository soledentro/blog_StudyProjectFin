import { ADD_POST, CLEAR_ALL_POSTS, DELETE_POST, EDIT_POST, LIKED_POST } from "../types/postsTypes"

export const addPost = (title, text, photo, tegs) => {
    return {
        type: ADD_POST,
        payload: {           
            id: Date.now(),
            title,
            text,
            photo,
            tegs,
            liked: false
        }
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id,
    }
}

export const editPost = (updatePostObject) => {
    return {
        type: EDIT_POST,
        payload: updatePostObject,
    }
}

export const clearAllPosts = () => {
    return {
        type: CLEAR_ALL_POSTS,
    }
}

export const likedPost = (id) => {
    return {
        type: LIKED_POST,
        payload: id,
    }
}
