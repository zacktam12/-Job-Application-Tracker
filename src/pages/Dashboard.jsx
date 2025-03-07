import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import JobForm from "../components/JobForm";

const Dashboard = () => {
  const { jobs } = useSelector((state) => state.jobs);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      <JobForm />
      <div className="mt-4 grid gap-4">
        {jobs.length === 0 ? (
          <p>No jobs added yet.</p>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
