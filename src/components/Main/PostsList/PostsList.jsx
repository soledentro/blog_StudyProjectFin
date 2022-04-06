import PostItem from "./PostItem/PostItem";
import { motion } from "framer-motion";
import { inputVariants, postListVariants } from "../postAnimation";
import { useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { useState } from "react";

const PostsList = () => {

    const posts = useSelector(store => store.posts)

    const [searchInput, setSearchInput] = useState('')

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const postFromSearch = posts.filter(post => { //поиск по заголовку, тексту, тегам
        return post.tegs.toLowerCase().includes(searchInput.toLowerCase())
            || post.title.toLowerCase().includes(searchInput.toLowerCase())
            || post.text.toLowerCase().includes(searchInput.toLowerCase())
    })

    return (
        <>
            <motion.div variants={inputVariants} initial="start" animate="end" className="input-group mb-3" width="100">
                <span className="input-group-text bi bi-search" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></span>
                <input type="text" className="form-control" value={searchInput} onChange={changeHandler} placeholder="поиск..." aria-label="Username" aria-describedby="addon-wrapping" />
            </motion.div>
            <div className="allpost">
                {
                    posts.length ? (
                        <motion.div variants={postListVariants} initial="start" animate="end" className="container row d-flex bd-highlight">
                            {postFromSearch.map((post, index) => (
                                <PostItem key={nanoid()} id={post.id} {...post} />
                            ))}
                        </motion.div>
                    ) : (<p>Список постов пуст...</p>)
                }
            </div>
        </>
    )
}

export default PostsList