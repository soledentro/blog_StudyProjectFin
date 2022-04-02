import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PostsListContext } from "../../contexts/PostsListContext"
import styles from "./modal.module.css"

const ModalInner = ({ onSubmit, onClose, title, text, photo, tegs, ...postForClient }) => {
    console.log(title, text, photo, tegs)
    console.log(postForClient)
    // title = '', text = '', photo = '', tegs = ''

    const [header, setHeader] = useState(title)
    const [words, setWords] = useState(text)
    const [img, setImg] = useState(photo)
    const [tag, setTag] = useState(tegs)
    const { id } = useParams()
    const { posts } = useContext(PostsListContext)
    const { LSPostsKey } = useContext(PostsListContext)


    const postForEdit = posts.findIndex((post) => post.id === +id)
    posts[postForEdit].title = header
    posts[postForEdit].text = words
    posts[postForEdit].photo = img
    posts[postForEdit].tegs = tag

    const editHeader = (e) => setHeader(e.target.value)
    const editWords = (e) => setWords(e.target.value)
    const editImg = (e) => setImg(e.target.value)
    const editTag = (e) => setTag(e.target.value)

    const editHandler = (e) => {
        e.preventDefault()

        if (words.length <= 1000 && header.trim() && words.trim() && img.trim() && tag.trim()) {
            setHeader(header)
            setWords(words)
            setImg(img)
            setTag(tag)
        }

        localStorage.setItem(LSPostsKey, JSON.stringify(posts))
        onClose()
    }

    const escHandler = (e) => {
        if (e.code === "Escape")
            onClose()
    }

    useEffect(() => {
        window.document.addEventListener('keydown', escHandler)

        return () => {
            window.document.removeEventListener('keydown', escHandler)
        }
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <form onSubmit={editHandler} className="d-flex flex-column align-items-center">
                    <div className="mb-3">
                        <input type="text"
                            value={header}
                            onChange={editHeader}
                            name="title"
                            className="form-control"
                            id="titlepost"
                            placeholder="Введите заголовок..."
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            value={words}
                            onChange={editWords}
                            name="text"
                            className="form-control"
                            id="textpost"
                            placeholder="Введите текст..."
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            value={img}
                            onChange={editImg}
                            name="photo"
                            className="form-control"
                            id="photopost"
                            placeholder="Ссылка на картинку..."
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            value={tag}
                            onChange={editTag}
                            name="tegs"
                            className="form-control"
                            id="tegspost"
                            placeholder="теги..."
                        />
                    </div>
                    <button type="submit"
                        className="btn btn-primary">
                        Изменить
                    </button>
                </form>
            </div>
        </div>

    )
}

export default ModalInner