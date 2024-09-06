import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[90vh] from-gray-900 to-black text-white">
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Welcome to SpaceX Info
        </h2>
        <p className="mt-6 text-lg text-black font-semibold">
          Explore the amazing world of SpaceX, its history, launches, and
          rockets!
        </p>
        <div className="mt-8">
          <a
            href="#explore"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
