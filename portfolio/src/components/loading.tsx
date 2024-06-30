// Loading.tsx
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../../public/loading.json"; // Update this path

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default Loading;
