import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MapView from "./components/MapView";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/map/:id"
        element={
          <ProtectedRoute>
            <MapView />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
export default App;
