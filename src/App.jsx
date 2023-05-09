import { useState } from 'react'
import './App.css'
import Navbar from './LayoutComponents/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import HomePage from './Pages/HomePage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Box width="98%" height="100%">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}  />

          
        </Routes>
        </Box>

      </BrowserRouter>
    </>
  )
}

export default App
