import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import Chat from "./pages/Chat/Chat";
import Register from "./pages/Register";
import NotFound from "./pages/ExceptionsPages/NotFound";

function App(): JSX.Element {
  return (
    <>
      <div className="bg-gray-100">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat/:roomId" element={<Chat />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
