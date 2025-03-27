import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobs/jobSlice";

const JobForm = () => {
  const [form, setForm] = useState({
    company: "",
    position: "",
    status: "Applied",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Form state updated:", form);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob({ ...form, id: Date.now() }));
    setForm({ company: "", position: "", status: "Applied" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
