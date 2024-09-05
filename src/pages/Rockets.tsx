import React, { useEffect } from "react";
import axios from "axios";
import RocketCard from "../components/RocketCard";
import { useDispatch, useSelector } from "react-redux";
import { addRockets } from "../features/rocketsSlice";
import { RootState } from "../app/store";

// Define the types for the rocket data from the SpaceX API
interface Rocket {
  id: string;
  name: string;
  description: string;
  flickr_images: string[];
  wikipedia: string;
}

const Rockets: React.FC = () => {
  const { rockets } = useSelector((state: RootState) => state.rocketsSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchRocketData = async () => {
      try {
        const response = await axios.get<Rocket[]>(
          "https://api.spacexdata.com/v4/rockets"
        );
        dispatch(addRockets(response.data));
      } catch (error) {
        console.error("Error fetching rocket data:", error);
      }
    };

    fetchRocketData();
  }, []);

  return (
    <div className="w-full h-full p-4">
      <h2 className="text-3xl pt-2 font-bold text-center">SpaceX Rockets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {rockets.length > 0 ? (
          rockets.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))
        ) : (
          <p className="text-center col-span-full">
            Loading rocket information...
          </p>
        )}
      </div>
    </div>
  );
};

export default Rockets;
