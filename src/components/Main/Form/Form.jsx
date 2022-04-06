import { useState } from "react";
import PostsList from "../PostsList/PostsList";
import { motion } from "framer-motion";
import { inputVariants } from "../postAnimation"
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/actionCreators/postsAC";


const Form = () => {

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [photo, setPhoto] = useState("")
  const [tegs, setTegs] = useState("")

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    if (text.length <= 1000 && title.trim() && text.trim() && photo.trim() && tegs.trim()) {
      dispatch(addPost(title, text, photo, tegs))
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
      <motion.form variants={inputVariants} initial="start" animate="end" onSubmit={submitHandler} className="d-flex flex-column align-items-center">
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
      </motion.form>
      <hr />
      <PostsList />
    </>
  )
}

export default Form