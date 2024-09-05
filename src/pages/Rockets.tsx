import { Link } from "react-router-dom";

const Rockets = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">SpaceX Rockets</h2>

      <div className="flex justify-center mt-4">
        <Link to="/rockets/falcon-9" className="text-blue-500 hover:underline">
          Falcon 9
        </Link>
      </div>
    </div>
  );
};

export default Rockets;
