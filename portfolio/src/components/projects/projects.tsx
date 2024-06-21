import Supereats from "../../../public/SuperEats.jpg";

interface project {
  name: string;
  description: string;
  url: string;
  github: string;
  image: string;
}

function projects() {
  const projects: project[] = [
    {
      name: "WatchIPTV",
      description:
        "WatchIPTV allows users to watch their favourite TV shows and movies on demand.",
      url: "https://watchiptvtoday.com/",
      github: "https://github.com/lewis-2000/watchiptv",
      image: "./public/watchiptv.jpg",
    },
    {
      name: "Chat Mistique",
      description:
        "Chat Mistique is a chat application that allows users to chat with each other.",
      url: "https://proud-island-0b47ac31e.5.azurestaticapps.net//",
      github: "https://github.com/lewis-2000/ChatMistique",
      image: "./public/chatMistique.jpg",
    },
    {
      name: "SuperEats",
      description:
        "SuperEats is a food delivery application that allows users to order food from restaurants.",
      url: "#",
      github: "https://github.com/lewis-2000/SuperEats",
      image: Supereats,
    },
  ];

  return (
    <>
      <div
        className="projects-header about-header flex text-center flex-col text-gray-500 p-6 flex-wrap justify-around"
        id="projects"
      >
        <h5>Browse My Recent</h5>
        <h1 className="text-black font-semibold text-3xl">Projects</h1>
      </div>

      <div className="projects-body p-4 flex justify-around flex-wrap">
        {projects.map((project, index) => (
          <div
            className="max-w-sm rounded-lg overflow-hidden shadow-md shadow-gray-500 sm:mb-3"
            key={index}
          >
            <img
              className="w-full"
              src={project.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <a
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full mr-4"
                href={project.github}
                target="_blank"
              >
                Github <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full"
                href={project.url}
                target="_blank"
              >
                Live Demo <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-more-projects w-full flex justify-center mt-10 p-4">
        <a
          className="bg-white hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full shadow-lg shadow-gray-500 "
          href="https://github.com/lewis-2000"
          target="_blank"
        >
          Checkout More Projects <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </>
  );
}

export default projects;
