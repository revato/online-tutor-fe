import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Main from "./pages/main/main";
import { Space } from "antd";
import Login from "./pages/admin/Login";
import axios from "axios";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  // axios.defaults.headers.common={Authorization:`Bearer ${}`}
  return (
    <div className="App">
      <Space>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/login" element={<Login />} />
        </Routes>
      </Space>
    </div>
  );
}

export default App;
