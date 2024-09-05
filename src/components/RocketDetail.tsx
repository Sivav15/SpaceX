import { useParams } from "react-router-dom";

const RocketDetail = () => {
  const { rocketId } = useParams<{ rocketId: string }>();

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">
        Rocket Details: {rocketId}
      </h2>
    </div>
  );
};

export default RocketDetail;
