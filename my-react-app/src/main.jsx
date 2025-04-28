import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router'
import Navbar from "./navbar"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Navbar/>
    <App ></App>
  </BrowserRouter>
</StrictMode>,
)
