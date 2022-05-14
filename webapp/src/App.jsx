import "./App.css"
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Components/Register/Register"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard>
                <div>TrafficReport</div>
              </Dashboard>
            }
          />
          <Route
            path="/dashboard/map"
            element={
              <Dashboard>
                <div>Map</div>
              </Dashboard>
            }
          />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/home" element={<div>2</div>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
