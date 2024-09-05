import React, { useState, useEffect } from "react";
import axios from "axios";
import LaunchCard from "../components/LaunchCard";

interface Link {
  small?: string;
  large?: string;
}

interface Links {
  patch: Link;
  reddit: {
    campaign?: string;
    launch?: string;
    media?: string;
    recovery?: string | null;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit?: string;
  webcast?: string;
  youtube_id?: string;
  article?: string;
  wikipedia?: string;
}

interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean;
  details: string;
  links: Links;
  cores: Core[];
}

const Launches: React.FC = () => {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get<Launch[]>(
          "https://api.spacexdata.com/v4/launches"
        );
        setLaunches(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch launches");
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8">SpaceX Launches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 col-span-full">
            Error fetching data: {error}
          </p>
        ) : (
          launches.map((launch) => <LaunchCard launch={launch} />)
        )}
      </div>
    </div>
  );
};

export default Launches;
