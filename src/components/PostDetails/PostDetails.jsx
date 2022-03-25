import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"


const PostDetails = ({ posts, id, title, text, photo, tegs, liked, deleteHandler, likedHandler }) => {
    const { postId } = useParams()
    const [post, setPost] = useState()

    const dataForClient = posts.find((post) => postId === post.id)
    setPost(dataForClient)

    return (
        <div className="p-2 flex-fill bd-highlight mb-3" style={{ width: '18rem' }}>
            <img src={photo} className="card-img-top" width="auto" height="auto" alt="..." />
            <div className="card-body outline-y">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text} <NavLink className="nav-link" to={`/post/${id}`}>>>></NavLink></p>
                <p className="card-text text-muted">{tegs}</p>
                <div className="d-grid gap-0.2 d-md-flex justify-content-md-end">
                    <button onClick={likedHandler} type="button" className={`btn btn-${liked ? "danger" : "outline-danger"} mx-1`}>♡</button>
                    <button onClick={deleteHandler} type="button" className="btn btn-outline-secondary mx-1">🗶</button>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
