import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import ApplicationTable from "../components/ApplicationTable";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  const fetchApplications = async () => {
    try {
      const res = await API.get("/admin/applications");
      setData(res.data.data);
    } catch (err) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // 🔍 Filter logic
  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
    ) && (domain ? item.domain === domain : true);
  });

  return (
    <div className="min-h-screen bg-[#070d18] text-white p-6">

      {/* 🔹 Header with Logout */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Admin <span className="text-cyan-400">Dashboard</span>
        </h1>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
          bg-red-500/10 text-red-400 hover:bg-red-500/20 
          border border-red-500/20 rounded-lg transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg w-full"
        />

        <select
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
        >
          <option value="">All Domains</option>
          <option>Web Development</option>
          <option>Mobile App Development</option>
          <option>AI / Machine Learning</option>
          <option>Cloud & DevOps</option>
          <option>Cybersecurity</option>
          <option>Data Analytics</option>
          <option>UI/UX Design</option>
        </select>
      </div>

      {/* Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ApplicationTable data={filteredData} refresh={fetchApplications} />
      )}
    </div>
  );
}