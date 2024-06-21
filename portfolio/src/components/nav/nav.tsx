// import { useState } from "react";

function MainNav() {
  // const [download, setDownload] = useState(false);

  return (
    <div className="backdrop-blur-md bg-white/30 rounded-lg flex justify-around p-4">
      <h1 className="font-semibold text-2xl text-black">
        Lewis <span className="text-gray-500 border-teal-300">Nganga</span>
      </h1>

      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg">
        Contact Me
      </button>
    </div>
  );
}

export default MainNav;
