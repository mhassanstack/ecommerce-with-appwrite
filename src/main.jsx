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
const router = createBrowserRouter([
  {
    path: "/", element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/productForm", element: <ProductForm></ProductForm> },
      { path: "/products", element: <Products></Products> },
      { path: "/product-page", element: <ProductPage></ProductPage> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
