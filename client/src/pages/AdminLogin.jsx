import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ADMIN_PASSWORD = "admin123"; // 🔥 change this

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      toast.success("Access granted");
      navigate("/admin/dashboard");
    } else {
      toast.error("Wrong password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070d18] text-white">
      <form
        onSubmit={handleLogin}
        className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Admin Access
        </h2>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 mb-4 outline-none"
        />

        <button className="w-full py-2 bg-cyan-400 text-black font-semibold rounded-lg">
          Enter Dashboard
        </button>
      </form>
    </div>
  );
}