import React from "react";
import JobForm from "../components/JobForm";
const AddJob = () => {
  return (
    <>
      <main className="p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Job</h2>
        <JobForm />
      </main>
    </>
  );
};

export default AddJob;
