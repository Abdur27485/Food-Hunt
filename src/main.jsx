import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import AuthProvider from './providers/AuthProvider';
import Register from './pages/Register/Register';
import Chef from './pages/Chef/Chef';
import Blog from './pages/Blog/Blog';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('https://recipe-chef-server-abdur27485.vercel.app/chefs'),
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/chefs/:id',
    element: <Chef></Chef>,
    loader: ({ params }) => fetch(`https://recipe-chef-server-abdur27485.vercel.app/chefs/${params.id}`)
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
