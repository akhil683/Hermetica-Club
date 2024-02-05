import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'
import ScrollToTop from './routes/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
      <HashRouter basename='/'>
        <ScrollToTop />
        <App />
      </HashRouter>
  // </React.StrictMode>,
)
