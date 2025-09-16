import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Blog from './pages/blogs'
import  { Blog_individual } from './pages/blog'
import Publish from './pages/publish'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<Blog_individual/>}/>
        <Route path="/publish" element={<Publish/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
