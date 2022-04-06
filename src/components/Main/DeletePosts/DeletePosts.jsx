import { useDispatch } from "react-redux";
import { clearAllPosts } from "../../../redux/actionCreators/postsAC";


const DeletePosts = () => {

  const dispatch = useDispatch()

  const clearAllHandler = () => dispatch(clearAllPosts())


  return (
    <div className="d-flex mt-5 justify-content-center">
      <button onClick={clearAllHandler} type="button" className="btn btn-outline-secondary mx-1">Удалить все посты</button>
    </div>
  )
}

export default DeletePosts
