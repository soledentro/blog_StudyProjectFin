import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { PostsListContext } from "../../../../contexts/PostsListContext";

const PostItem = ({ id, title, text, photo, tegs, liked }) => {

    const { likedPost, deletePost } = useContext(PostsListContext)

    const deleteHandler = () => deletePost(id)
    const likedHandler = () => likedPost(id)

    return (
        <div className="p-2 flex-fill bd-highlight mb-3" style={{ width: '18rem' }}>
            <img src={photo} className="card-img-top" width="auto" height="auto" alt="..." />
            <div className="card-body outline-y">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text} <NavLink className="nav-link" to={`/post/${id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></NavLink></p>
                <p className="card-text text-muted">#{tegs}</p>
                <div className="d-grid gap-0.2 d-md-flex justify-content-md-end">
                    <button onClick={likedHandler} type="button" className={`btn btn-${liked ? "danger" : "outline-danger"} mx-1`}>♡</button>
                    <button data-tip data-for="del" onClick={deleteHandler} type="button" className="btn btn-outline-secondary mx-1">🗶</button>
                    <ReactTooltip id="del">
                        <span>Удалить</span>
                    </ReactTooltip>
                </div>
            </div>
        </div>
    )
}

export default PostItem