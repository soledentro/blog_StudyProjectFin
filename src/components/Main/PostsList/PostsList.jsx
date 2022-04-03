import { useContext } from "react"
import { PostsListContext } from "../../../contexts/PostsListContext";
import PostItem from "./PostItem/PostItem";
import { motion } from "framer-motion";
import { postListVariants } from "../postAnimation"


const PostsList = () => {

    const { posts } = useContext(PostsListContext)

    return (
        <>
            {
                posts.length ? (
                    <motion.div variants={postListVariants} initial="start" animate="end" className="container row d-flex bd-highlight">
                        {posts.map((post, index) => (
                            <PostItem key={post.id} id={post.id} {...post} />
                        ))}
                    </motion.div>
                ) : (<p>Список постов пуст...</p>)
            }
        </>
    )
}

export default PostsList