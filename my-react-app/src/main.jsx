import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Word!</div>
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
