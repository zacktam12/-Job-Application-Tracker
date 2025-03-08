import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication
    dispatch(loginSuccess({ email: form.email }));
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
