import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const JobDetails = () => {
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.jobs);
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">
        {job.position} at {job.company}
      </h2>
      <p>Status: {job.status}</p>
      {job.interviewDate && (
        <p>
          Interview Date: {new Date(job.interviewDate).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default JobDetails;
