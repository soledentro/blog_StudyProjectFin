import { createContext } from "react";
import usePosts from "../hooks/usePosts";

const PostsListContext = createContext()

const PostsListProvider = ({children}) => {

    const {posts, createPost, likedPost, deletePost, clearAllPosts, returnToPrevState} = usePosts()
   
    return (
        <PostsListContext.Provider value={{posts, createPost, likedPost, deletePost, clearAllPosts, returnToPrevState}}>
            {
                children
            }        
        </PostsListContext.Provider>
    )
}

export default PostsListProvider

export {
    PostsListContext
}