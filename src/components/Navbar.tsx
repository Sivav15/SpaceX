import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <h1 className="text-white md:text-2xl text-lg  font-bold">
          SpaceX Info
        </h1>
        <div className="flex md:space-x-6 space-x-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 md:text-lg text-md border-b-2 border-blue-500"
                : "text-white md:text-lg  text-md hover:text-gray-300 transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 md:text-lg text-md border-b-2 border-blue-500"
                : "text-white md:text-lg text-md hover:text-gray-300 transition duration-300"
            }
          >
            History
          </NavLink>
          <NavLink
            to="/launches"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300  md:text-lg text-md border-b-2 border-blue-500"
                : "text-white md:text-lg text-md hover:text-gray-300 transition duration-300"
            }
          >
            Launches
          </NavLink>
          <NavLink
            to="/rockets"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 md:text-lg text-md border-b-2 border-blue-500"
                : "text-white md:text-lg text-md  hover:text-gray-300 transition duration-300"
            }
          >
            Rockets
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
