import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
