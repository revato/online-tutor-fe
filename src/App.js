import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Main from "./pages/main/main";
import { Space } from "antd";

function App() {
  return (
    <div className="App">
      <Space>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="admin" element={<Dashboard />} />
        </Routes>
      </Space>
    </div>
  );
}

export default App;
