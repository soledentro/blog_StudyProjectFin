import PostsList from "../../components/Main/PostsList/PostsList";
import { ADD_POST, CLEAR_ALL_POSTS, DELETE_POST, EDIT_POST, LIKED_POST, SEARCH_POST } from "../types/postsTypes";

export const postsReducer = (store = [], action) => {
    switch (action.type) {
         case DELETE_POST:
            return store.filter((post) => post.id !== action.payload);

        case EDIT_POST:
            return store.length
            ? store.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload
                }

                return post
            }) : [action.payload]

        case SEARCH_POST:
            return store.filter((post) => {
                if (post.title && post.tegs && post.text === action.payload.value) {
                    return post
                } 
                return PostsList
            });

        case ADD_POST:
            return [...store, action.payload];

        case CLEAR_ALL_POSTS:
            return [];

        case LIKED_POST:
            return store.map((post) => {
                if (post.id === action.payload) {
                    return {
                        ...post,
                        liked: !post.liked
                    }
                } 
                return post
            })

        default:
            return store;
    }

}