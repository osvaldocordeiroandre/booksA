import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Error from '../Pages/Error/Error'

export default function RouterApp() {
  return (
    
    <BrowserRouter>
    
        <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Error/>} />
            

        </Routes>

    </BrowserRouter>

  )
}
