import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ClubProvider from './Context/hermetica.context.jsx'
import ScrollToTop from './routes/ScrollToTop.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClubProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ClubProvider>
  </React.StrictMode>,
)
