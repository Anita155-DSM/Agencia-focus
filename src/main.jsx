import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Importamos Bootstrap CSS y JS (para el menú móvil)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Iconos de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)