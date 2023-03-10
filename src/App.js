import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Main from "./pages/main/main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="admin" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
