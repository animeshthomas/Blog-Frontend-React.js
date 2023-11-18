import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddBlog from './components/AddBlog';
import ViewBlog from './components/ViewBlog';
import ViewMyPost from './components/ViewMyPost';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='add' element={<AddBlog/>}/>
        <Route path='view' element={<ViewBlog/>}/>
        <Route path='mypost' element={<ViewMyPost/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
