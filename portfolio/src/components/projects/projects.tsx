import Supereats from "../../assets/SuperEats.jpg";
import Cinema from "../../assets/cinema.png";
import AIWorkSheetGenerator from "../../assets/AIWorkSheetGenerator.png";
import FLWeb from "../../assets/FLWeb.png";
import IndiaTourBook from "../../assets/IndiaTourBook.jpeg";
import FlammyEngine from "../../assets/FlammyEngine.png";
import WatchIPTV from "../../assets/watchiptv.jpg";
import ChatMistique from "../../assets/chatMistique.jpg";

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
      name: "FLWeb Static Engine- Desktop",
      description:
        "A static templating engine that allows users, especially students, to easily edit content and host their online portfolios on platforms like GitHub Pages without requiring backend servers. ",
      url: "https://lewis-2000.github.io/FLWeb/",
      github: "https://github.com/lewis-2000/FLWeb",
      image: FLWeb,
    },
    {
      name: "IndiaTourBook",
      description:
        "Visual Representation states and regions of India for tourist ",
      url: "https://lewis-2000.github.io/India-Interractive-Landing-Page/",
      github: "https://github.com/lewis-2000/India-Interractive-Landing-Page",
      image: IndiaTourBook,
    },
    {
      name: "AI Worksheet Generator",
      description:
        "Wordpress Plugin that lets you create a worksheet from words by the Use of AI",
      url: "https://github.com/lewis-2000/ai-worksheet-generator",
      github: "https://github.com/lewis-2000/ai-worksheet-generator",
      image: AIWorkSheetGenerator,
    },

    {
      name: "Flammy Engine",
      description: "Game engine built with OpenGL and C++",
      url: "https://github.com/lewis-2000/FlammyEngine",
      github: "https://github.com/lewis-2000/FlammyEngine",
      image: FlammyEngine,
    },
    {
      name: "WatchIPTV",
      description:
        "WatchIPTV allows users to watch their favourite TV shows and movies on demand.",
      url: "https://lewis-2000.github.io/watchiptv/",
      github: "https://github.com/lewis-2000/watchiptv",
      image: WatchIPTV,
    },
    {
      name: "Chat Mistique",
      description:
        "Chat Mistique is a chat application that allows users to chat with each other.",
      url: "https://lewis-2000.github.io/ChatMistique/",
      github: "https://github.com/lewis-2000/ChatMistique",
      image: ChatMistique,
    },
    {
      name: "Cinema",
      description:
        "A cinema booking web app that allows users to effortlessly browse showtimes, select seats, and purchase tickets online.",
      url: "https://lewis-2000.github.io/Cinema/",
      github: "https://github.com/lewis-2000/Cinema",
      image: Cinema,
    },
    {
      name: "SuperEats",
      description:
        "SuperEats is a food delivery application that allows users to order food from restaurants.",
      url: "https://lewis-2000.github.io/SuperEats-Ported/",
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

      <div className="projects-body p-4 flex justify-center gap-4 flex-wrap">
        {projects.map((project, index) => (
          <div
            className="max-w-sm rounded-lg overflow-hidden shadow-md shadow-gray-500 sm:mb-3 mb-3 "
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
                className="inline-flex items-center gap-2 bg-transparent border border-gray-500 text-gray-700 font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-500 hover:text-white hover:border-transparent"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
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
