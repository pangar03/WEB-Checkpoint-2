import { useState } from "react"
import { addComment, type Comment } from "../store/CommentsSlice/CommentsSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const AddPage = () => {
    const [data, setData] = useState<Comment>({
        id: Number(new Date),
        name: "",
        email: "",
        body: "",
        isFav: false
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()

        dispatch(addComment(data))
        navigate(-1);
    }

    const handleCancel = () => {
        navigate(-1);
    }

    return (<>
        <button onClick={handleCancel}>Cancel</button>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="name" onChange={(e) => setData({...data, name: e.target.value})}/>
            <input type="text" placeholder="email" onChange={(e) => setData({...data, email: e.target.value})}/>
            <input type="text" placeholder="body" onChange={(e) => setData({...data, body: e.target.value})}/>
            <button type="submit">Submit</button>
        </form>
    </>)
}

export default AddPage;