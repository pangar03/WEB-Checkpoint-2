import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { useNavigate } from "react-router-dom"
import CommentCard from "../components/commentCard"

const CommentList = () => {
    const commentList = useSelector((state: RootState) => state.comments.commentList)
    console.log("COMMENTS: ", commentList)
    const navigate = useNavigate()

    const handleFav = () => {
        navigate("/favorites")
    }

    const handleAdd = () => {
        navigate("/add")
    }

    return(<>
        <button onClick={handleFav}>Favorites</button>
        <button onClick={handleAdd}>Add</button>
        {commentList && commentList.map((comment) => <CommentCard {...comment}/>)}
    </>)
}

export default CommentList;