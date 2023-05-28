import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage.jsx';
import Header from './components/Header/header.jsx';
import Products from './components/Products/Products.jsx';
import About from './components/About/About.jsx';
import Cart from './components/Cart/Cart.jsx';
import { ShopContextProvider } from './context/shopContext.jsx';
import { AuthProvider } from './context/authContex.jsx';
import CheckOut from './components/Checkout/Checkout.jsx';
import ProductsInfo from './components/ProductsInfo/index.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: '/products', element: <Products /> },
      { path: '/about', element: <About /> },
      { path: '/cart', element: <Cart /> },
      { path: '/checkout', element: <CheckOut /> },
      { path: '/products/:id', element: <ProductsInfo /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
