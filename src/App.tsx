import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGetCommentsQuery } from './services/FetchComments';
import { setComments } from './store/CommentsSlice/CommentsSlice';
import CommentList from './pages/commentList';
import { useDispatch } from 'react-redux';
import EditPage from './pages/editPage';
import FavList from './pages/favList';
import AddPage from './pages/addPage';

function App() {

  const {data} = useGetCommentsQuery({});

  const dispatch = useDispatch()

  if(data) {
    console.log(data)
    const newComments = data.map((comment: any) => {return {...comment, isFav: false}})
    dispatch(setComments(newComments))
  };

  return(<>
    <Router>
      <Routes>
        <Route path='/' element={<CommentList/>}></Route>
        <Route path='/edit/:id' element={<EditPage />}></Route>
        <Route path='/favorites' element={<FavList />}></Route>
        <Route path='/add' element={<AddPage />}></Route>
        <Route></Route>
      </Routes>
    </Router>
  </>)
}

export default App
