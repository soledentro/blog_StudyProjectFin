import { useContext } from "react"
import { PostsListContext } from "../../../contexts/PostsListContext";
import PostItem from "./PostItem/PostItem";

const PostsList = () => {

    const { posts } = useContext(PostsListContext)

    return (
        <div className="container row d-flex bd-highlight">
            {posts.length ? posts.map((post, index) => (
                <PostItem key={post.id}
                    id={post.id}
                    index={index}
                    liked={post.liked}
                    text={post.text}
                    tegs={post.tegs}
                    photo={post.photo}
                    title={post.title}
                />
            )) : <p>Список постов пуст...</p>}
        </div>
    )
}

export default PostsList