import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      navigate("/tasks");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (username === "admin" && password === "password") {
        navigate("/tasks");
      } else {
        setError("Invalid username or password");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        {error && <div className="error-message">{error}</div>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
