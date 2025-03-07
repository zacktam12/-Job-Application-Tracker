const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">
        {job.position} @ {job.company}
      </h2>
      <p>
        Status: <span className="font-semibold">{job.status}</span>
      </p>
      {job.interviewDate && (
        <p>Interview: {new Date(job.interviewDate).toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default JobCard;
