import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Dorama from './pages/Doramas/Dorama'

import Home from './pages/Home/Home'
import Search from './pages/Search/Search'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='dorama/:id' element={<Dorama/>}/>
        <Route path='search' element={<Search/>}/>


      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
