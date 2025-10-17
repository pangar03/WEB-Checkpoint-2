import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { useNavigate, useParams } from "react-router-dom"
import { editComment } from "../store/CommentsSlice/CommentsSlice"

const EditPage = () => {
    const id = Number(useParams().id)
    console.log("Params: ", id)
    const comment = useSelector((state: RootState) => state.comments.commentList?.find((item) => item.id === id))
    const [commentData, setCommentData] = useState(comment)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch(editComment(commentData!))
        navigate(-1)
    }

    return (<>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Name</label>
            <input type="text" onChange={(e) => setCommentData({...commentData!, name: e.target.value})} value={commentData?.name}/>
            <label>Email</label>
            <input type="email" onChange={(e) => setCommentData({...commentData!, email: e.target.value})} value={commentData?.email}/>
            <label>Body</label>
            <input type="text" onChange={(e) => setCommentData({...commentData!, body: e.target.value})} value={commentData?.body}></input>
            <button type="submit">Save Changes</button>
        </form>
    </>)
}

export default EditPage;