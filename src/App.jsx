import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import RootLayout from './Layout/RootLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'product/:productId',
          element: <ProductDetails />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
