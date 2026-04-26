import React from "react";
import API from "../services/api";
import toast from "react-hot-toast";

export default function ApplicationTable({ data, refresh }) {

  const handleDelete = async (id) => {
    try {
      await API.delete(`/admin/applications/${id}`);
      toast.success("Deleted successfully");
      refresh();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden">
        <thead className="bg-white/10 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Domain</th>
            <th>College</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((app) => (
            <tr key={app._id} className="border-t border-white/10">
              <td className="p-3">{app.name}</td>
              <td>{app.email}</td>
              <td>{app.phone}</td>
              <td className="text-cyan-400">{app.domain}</td>
              <td>{app.college}</td>

              <td>
                <button
                  onClick={() => handleDelete(app._id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <p className="text-center mt-4 text-gray-400">
          No applications found
        </p>
      )}
    </div>
  );
}