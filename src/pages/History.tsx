import React, { useState, useEffect } from "react";
import axios from "axios";
import HistoryCard from "../components/HistoryCard";
import { history } from "../types/interface";

// Define types for the history data

const History: React.FC = () => {
  const [historyData, setHistoryData] = useState<history[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await axios.get<history[]>(
          "https://api.spacexdata.com/v4/history"
        );
        setHistoryData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8">SpaceX History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 col-span-full">
            Error fetching data: {error.message}
          </p>
        ) : (
          historyData.map((item) => (
            <HistoryCard history={item} key={item.event_date_unix} />
          ))
        )}
      </div>
    </div>
  );
};

export default History;
