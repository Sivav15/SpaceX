import React from "react";

// Define the structure inside the history object
interface historyCardProps {
  history: {
    title: string;
    details: string;
    event_date_utc: string;
    links?: {
      article?: string;
    };
  };
}

const HistoryCard: React.FC<historyCardProps> = ({ history }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-[400px] flex flex-col">
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold mb-3">{history.title}</h3>
        <div className="flex-grow overflow-auto max-h-52 mb-4">
          <p className="text-gray-700">{history.details}</p>
        </div>
        <p className="text-gray-500">
          <strong>Date:</strong>{" "}
          {new Date(history.event_date_utc).toLocaleDateString()}
        </p>
      </div>
      {history.links?.article && (
        <a
          href={history.links.article}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-800 hover:bg-blue-200 block text-center py-2 px-4 bg-blue-100 rounded-md mb-4 mx-4"
        >
          Read more
        </a>
      )}
    </div>
  );
};

export default HistoryCard;
