import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "../types/interface";

interface RocketCardProps {
  rocket: Rocket;
}

const RocketCard: React.FC<RocketCardProps> = ({ rocket }) => {
  return (
    <div className=" xl:w-96 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={rocket.flickr_images[0]}
        alt={rocket.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2">{rocket.name}</h3>
        <p className="text-sm text-gray-700 mb-4 flex-grow">
          {rocket.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <Link
            to={`/rockets/${rocket.id}`}
            className="text-blue-500 hover:underline"
          >
            Learn More
          </Link>
          <a
            href={rocket.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Wikipedia
          </a>
        </div>
      </div>
    </div>
  );
};

export default RocketCard;
