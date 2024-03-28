import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { HashRouter } from 'react-router-dom'
import './index.css'
import ScrollToTop from './components/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
      <HashRouter basename='/'>
        <ScrollToTop />
        <App />
      </HashRouter>
)
