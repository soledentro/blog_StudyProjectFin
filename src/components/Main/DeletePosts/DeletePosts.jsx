import { useContext } from "react";
import { PostsListContext } from "../../../contexts/PostsListContext";


const DeletePosts = () => {

  const { clearAllPosts, returnToPrevState } = useContext(PostsListContext)

  const clearAllHandler = () => clearAllPosts()


  return (
    <div className="d-flex mt-5 justify-content-center">
      <button onClick={returnToPrevState} type="button" className="btn btn-outline-success mx-1">☇ Отменить удаление</button>
      <button onClick={clearAllHandler} type="button" className="btn btn-outline-secondary mx-1">Удалить все посты</button>
    </div>
  )
}

export default DeletePosts
