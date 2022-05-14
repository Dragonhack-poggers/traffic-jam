import "./App.css"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Components/Login/Login"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>1</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<div>2</div>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
