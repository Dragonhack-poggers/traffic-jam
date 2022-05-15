import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import RegisterForm from "./Components/Register/Register";
import { AppProvider } from "./lib/AppContext";
import ReloadPrompt from "./Components/ReloadPrompt";
import Map from "./Components/Map";
import Charts from "./pages/Charts";

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <ReloadPrompt />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/dashboard' element={<Charts />} />
            <Route
              path='/dashboard/map'
              element={
                <Dashboard>
                  <Map />
                </Dashboard>
              }
            />
            <Route path='/register' element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
