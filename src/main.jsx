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
import InvoiceView from './InvoiceView.jsx'
import InvoiceEdit from './InvoiceEdit.jsx'
import InvoiceAdd from './InvoiceAdd.jsx'

const router = createBrowserRouter([
  {
    path: "/Invoiceapp-vite-tailwind-reduxtoolkit/",
    element: <App />
  },
  {
    path: "/invoice/:id",
    element: <InvoiceView />
  },
  {
    path: "/invoice/:id/edit",
    element: <InvoiceEdit />
  },
  {
    path: "/invoice/add",
    element: <InvoiceAdd />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='xl:flex xl:w-full xl:h-full'>
        <div className='xl:h-screen xl:overflow-hidden xl:w-28'>
          <Nav />
        </div>
        <div className='xl:w-full'>
          <RouterProvider router={router} />
        </div>
      </div>
    </Provider>
  </React.StrictMode>,
)
