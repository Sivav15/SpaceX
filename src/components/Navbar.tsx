import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <h1 className="text-white text-3xl font-bold">SpaceX Info</h1>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/history"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            History
          </Link>
          <Link
            to="/launches"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Launches
          </Link>
          <Link
            to="/rockets"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Rockets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
