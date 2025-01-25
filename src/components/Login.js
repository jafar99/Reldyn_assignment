import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/Login.css";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [error, setErrorState] = useState(""); 
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "password") {
      navigate("/tasks");
    } else {
      setErrorState("Invalid username or password");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)(); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
            onKeyDown={handleKeyPress}
          />
          {errors.username && <div className="error-message">{errors.username.message}</div>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            onKeyDown={handleKeyPress}
          />
          {errors.password && <div className="error-message">{errors.password.message}</div>}

          {error && <div className="error-message">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
