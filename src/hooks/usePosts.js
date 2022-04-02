import { useEffect, useState } from "react"

const LSPostsKey = "posts"
const history = []

const usePosts = () => {
    const [posts, setPosts] = useState(() => {
        const dataFromLS = localStorage.getItem(LSPostsKey)
        return JSON.parse(dataFromLS) || []
      })

    const createPost = (title, text, photo, tegs) => {
        const newPost = {
            id: Date.now(),
            title,
            text,
            photo,
            tegs,
            liked: false
        }
        
        setPosts(prev => [...prev, newPost])
    }
    
    const likedPost = (id) => {
        setPosts(prev => prev.map(post => {
            if (post.id === id) {
                return {
                    ...post,
                    liked: !post.liked
                }
            }
            return post
        }))
    }
    
    const deletePost = (id) => {
        setPosts(prev => prev.filter((post) => post.id !== id))
    }
    
    const clearAllPosts = () => {
        history.push(posts)
        setPosts([])
    }

    const returnToPrevState = () => {
        setPosts(history.pop())
    }

    useEffect(() => {
        const dataFromLS = localStorage.getItem(LSPostsKey)

        if (dataFromLS) {
            setPosts(JSON.parse(dataFromLS))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LSPostsKey, JSON.stringify(posts))
    }, [posts])

    return {
        posts,
        createPost,
        likedPost,
        deletePost,
        clearAllPosts,
        returnToPrevState,
        LSPostsKey,
        
    }

}

export default usePosts