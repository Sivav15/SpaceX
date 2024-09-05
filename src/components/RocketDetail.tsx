import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const RocketDetail = () => {
  const { rocketId } = useParams<{ rocketId: string }>();
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const { rockets } = useSelector((state: RootState) => state.rocketsSlice);

  const rocket = rockets.find((r) => r.id === rocketId);

  if (!rocket) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-red-500">
          Rocket not found
        </h2>
      </div>
    );
  }

  return (
    <div className="p-4 ">
      <h2 className="text-4xl font-bold text-center mb-6">{rocket.name}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Rocket Images */}
        <div className="flex-shrink-0 md:w-1/2">
          {rocket.flickr_images.length > 0 ? (
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {rocket.flickr_images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${rocket.name} image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Rocket Details */}
        <div className="flex-grow">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {rocket.description}
          </p>
          <a
            href={rocket.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Learn more on Wikipedia
          </a>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 mt-5 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition duration-300 flex items-center mb-4"
      >
        <span className="mr-2">&larr;</span> Back
      </button>
    </div>
  );
};

export default RocketDetail;
