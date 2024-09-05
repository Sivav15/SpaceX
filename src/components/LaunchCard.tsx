import React from "react";

interface LaunchCardProps {
  launch: {
    id: string;
    name: string;
    details: string;
    date_utc: string;
    links: {
      article?: string;
      webcast?: string;
    };
  };
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  return (
    <div
      key={launch.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-[400px] flex flex-col"
    >
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold mb-3">{launch.name}</h3>

        <div className="flex-grow overflow-auto max-h-44 mb-4">
          <p className="text-gray-700">{launch.details}</p>
        </div>
        <p className="text-gray-500">
          <strong>Date:</strong>{" "}
          {new Date(launch.date_utc).toLocaleDateString()}
        </p>
      </div>
      {launch.links.article && (
        <a
          href={launch.links.article}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-800 hover:bg-blue-200 block text-center py-2 px-4 bg-blue-100 rounded-md mb-4 mx-4"
        >
          Read more
        </a>
      )}
      {launch.links.webcast && (
        <a
          href={launch.links.webcast}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-800 hover:bg-blue-200 block text-center py-2 px-4 bg-blue-100 rounded-md mb-4 mx-4"
        >
          Watch video
        </a>
      )}
    </div>
  );
};

export default LaunchCard;
