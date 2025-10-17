import { useState } from "react"
import { toggleFavorite } from "../store/CommentsSlice/CommentsSlice";
import { useNavigate } from "react-router-dom";
import type { Comment } from "../store/CommentsSlice/CommentsSlice";
import { useDispatch } from "react-redux";

const CommentCard = ({id , name, email, body, isFav}: Comment) => {
    const [commentData, setCommentData] = useState({id, name, email, body, isFav});
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleEdit = () => {
        navigate(`/edit/${commentData.id}`)
    }

    const handleFavorite = () => {
        setCommentData({...commentData, isFav: !commentData.isFav})
        console.log("NEW FAV STATE: ", commentData.isFav)
        dispatch(toggleFavorite(commentData))
    }
    
    return (<>
        <div>
            <h2>{commentData.name}</h2>
            <h2>{commentData.email}</h2>
            <p>{commentData.body}</p>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button className={isFav ? "red" : "normal"} onClick={handleFavorite}>{isFav ? "Unavorite" : "Favorite"}</button>
            </div>
        </div>
    </>)
}

export default CommentCard;