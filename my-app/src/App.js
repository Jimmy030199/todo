import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Todo from './component/Todo'
import Calender from './component/Calender'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/clander" element={<Calender />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
