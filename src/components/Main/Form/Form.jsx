import { useContext, useState } from "react";
import { PostsListContext, } from "../../../contexts/PostsListContext";
import PostsList from "../PostsList/PostsList";

const Form = () => {

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [photo, setPhoto] = useState("")
  const [tegs, setTegs] = useState("")
  const { createPost } = useContext(PostsListContext)

  const submitHandler = (e) => {
    e.preventDefault()

    if (text.length <= 1000 && title.trim() && text.trim() && photo.trim() && tegs.trim()) {
      createPost(title, text, photo, tegs)
      setTitle("")
      setText("")
      setPhoto("")
      setTegs("")
    } else {
      alert("Вы не заполнили какое-то из полей или поле текста превышает 1000 знаков")
    }
  }

  return (
    <>
      <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
        <div className="mb-3">
          <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            className="form-control"
            id="titlepost"
            placeholder="Введите заголовок..."
          />
        </div>
        <div className="mb-3">
          <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="text"
            className="form-control"
            id="textpost"
            placeholder="Введите текст..."
          />
        </div>
        <div className="mb-3">
          <input type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            name="photo"
            className="form-control"
            id="photopost"
            placeholder="Ссылка на картинку..."
          />
        </div>
        <div className="mb-3">
          <input type="text"
            value={tegs}
            onChange={(e) => setTegs(e.target.value)}
            name="tegs"
            className="form-control"
            id="tegspost"
            placeholder="теги..."
          />
        </div>
        <button type="submit"
          className="btn btn-primary">
          Добавить пост
        </button>
      </form>
      <hr />
      <PostsList />
    </>
  )
}

export default Form