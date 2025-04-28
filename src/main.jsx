import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ProductForm from './components/ProductForm.jsx'
import Products from './pages/Products.jsx'
import ProductPage from './pages/ProductPage.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux';
import Checkout from './pages/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/productForm", element: <ProductForm></ProductForm> },
      { path: "/products", element: <Products></Products> },
      { path: "/product-page/:id", element: <ProductPage></ProductPage> },
      { path: "/checkout", element: <Checkout></Checkout> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
