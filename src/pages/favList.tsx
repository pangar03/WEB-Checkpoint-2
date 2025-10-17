import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { useNavigate } from "react-router-dom"
import CommentCard from "../components/commentCard"

const FavList = () => {
    const commentList = useSelector((state: RootState) => state.comments.favorites)
    const navigate = useNavigate()

    const handleFav = () => {
        navigate(-1)
    }

    return(<>
        <button onClick={handleFav}>Back</button>
        {commentList && commentList.map((comment) => <CommentCard {...comment}/>)}
        {commentList?.length === 0 && <p>No Favorites Yet</p>}

    </>)
}

export default FavList;