import { useContext, useState } from "react"
import { PostsListContext } from "../../contexts/PostsListContext"

const SearchForm = () => {

    // const { posts } = useContext(PostsListContext)

    const [searchInput, setSearchInput] = useState('')

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    // const filterTags = posts.filter(post => {
    //     return post.tags.toLowerCase().includes(searchInput.toLowerCase())
    // })


    return (
        <div className="d-grid d-md-flex justify-content-md-end">
            <span className="input-group-text" id="addon-wrapping">#</span>
            <input type="text" className="form-control" value={searchInput} onChange={changeHandler} placeholder="поиск по тегу" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
    )
}

export default SearchForm