import { SpinnerRound } from "spinners-react";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <SpinnerRound
        size={72}
        thickness={148}
        speed={65}
        color="rgba(57, 141, 172, 0.73)"
      />
    </div>
  );
}

export default Loader;
