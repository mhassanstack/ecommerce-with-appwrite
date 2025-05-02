import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductPage from './pages/ProductPage.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux';
import Checkout from './pages/Checkout.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import AddUsers from './pages/AddUsers.jsx'
import UsersList from './pages/UsersList.jsx'
import EditUser from './pages/EditUser.jsx'
import ProductList from './pages/ProductList.jsx'
import AddProduct from './components/AddProduct.jsx'
import EditProduct from './pages/EditProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/add-product", element: <AddProduct></AddProduct> }, ,
      { path: "/edit-product/:prodId", element: <EditProduct></EditProduct> }, ,
      { path: "/products", element: <Products></Products> },
      { path: "/product-page/:id", element: <ProductPage></ProductPage> },
      // { path: "/checkout", element: <Checkout></Checkout> },
      { path: "/add-users", element: <AddUsers></AddUsers> },
      { path: "/user-list", element: <UsersList></UsersList> },
      { path: "/edit-user/:userId", element: <EditUser></EditUser> },
      { path: "/product-list", element: <ProductList></ProductList> },
      // { path: "/signup", element: <Signup></Signup> },
      // { path: "/login", element: <Login></Login> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
