import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Login from "./components/Login";
import TaskPage from "./pages/TaskPage";
import "./styles/global.css";

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
