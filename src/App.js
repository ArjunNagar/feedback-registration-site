import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Registration from "./components/Registration";
import Login from "./components/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
