import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Tools from './pages/Tools'
import ToolTemplate from './pages/ToolTemplate'
import Pricing from './pages/Pricing'
import Auth from './pages/Auth'
import './index.css'

function Layout({children}){
  return children
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><App/></Layout>} />
        <Route path="/tools" element={<Layout><Tools/></Layout>} />
        <Route path="/tools/:slug" element={<Layout><ToolTemplate/></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing/></Layout>} />
        <Route path="/login" element={<Layout><Auth mode="login"/></Layout>} />
        <Route path="/signup" element={<Layout><Auth mode="signup"/></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
