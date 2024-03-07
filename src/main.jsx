import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from '../app/store.jsx'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
