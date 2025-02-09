import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderComp } from './context/ContextApi.jsx'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <ProviderComp>
  
    <App />
    <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>


  </ProviderComp>
)
