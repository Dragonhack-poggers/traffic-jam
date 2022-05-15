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
import TablePage from "./pages/TablePage";
import { DashboardProvider } from "./lib/DashboardContext";

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
        <DashboardProvider>
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
              <Route path='/dashboard/table' element={<TablePage />} />
            </Routes>
          </BrowserRouter>
        </DashboardProvider>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
