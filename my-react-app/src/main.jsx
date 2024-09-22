import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import ErrorPage from './Pages/404.jsx';
import ProductsPage from './Pages/ProductsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Word!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/register',
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/products",
    element: <ProductsPage></ProductsPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
