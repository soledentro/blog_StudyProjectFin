import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ReactTooltip from "react-tooltip"
import { PostsListContext } from "../../../../contexts/PostsListContext"
import Modal from "../../../Modal/Modal"
import ModalInner from "../../../Modal/ModalInner"



const PostDetails = () => {

    const { posts } = useContext(PostsListContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const postForClient = posts.find((post) => post.id === +id)

    const [viewModal, setViewModal] = useState(false)

    const openModal = () => {
        setViewModal(true)
    }

    const closeModal = () => {
        setViewModal(false)
    }

    return (
        <>
            <div className="container d-flex justify-context-center" style={{ width: '24rem' }}>
                <div className="card d-flex justify-context-center" >
                    <img src={postForClient.photo} className="card-img-top" width="auto" height="auto" alt="..." />
                    <div className="card-body outline-y">
                        <h5 className="card-title">{postForClient.title}</h5>
                        <p className="card-text">{postForClient.text}</p>
                        <p className="card-text text-muted">#{postForClient.tegs}</p>
                        <div className="d-grid gap-2 d-md-block">
                            <button data-tip data-for="back" onClick={() => { navigate(-1) }} type="button" className="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg></button>
                            <ReactTooltip id="back">
                                <span>Назад</span>
                            </ReactTooltip>
                            <button data-tip data-for="edit" onClick={openModal} type="button" className="btn btn-outline-primary mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg></button>
                            <ReactTooltip id="edit">
                                <span>Редактировать</span>
                            </ReactTooltip>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                state={viewModal}
                onClose={closeModal}
            >
                <ModalInner
                    editHandler={() => { }}
                    {...postForClient}
                // title={postForClient.title}
                // text={postForClient.text}
                // photo={postForClient.photo}
                // tegs={postForClient.tegs}
                />
            </Modal>
        </>
    )
}

export default PostDetails
