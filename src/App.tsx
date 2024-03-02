
import { Navbar } from './components/Navbar'
// import { PostDetail } from './components/PostDetail'
import { PostList } from './components/PostList'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children :[
      {
        path :"/",
        element : (
          <div>
            <PostList />
          </div>
        )
      },
      {
        path: "/posts",
        element: (
          <div>
            <PostList />

          </div>
        )
      },
      {
        path:"/todos",
        element : <TodosList />
      }
    ]
  },
  {
    path : "/posts/:postId",
    element: <PostDetail />
  }
])



function App() {
  

  return (
    <>
     return <RouterProvider  router={router} />
       
    </>
  )
}

export default App
