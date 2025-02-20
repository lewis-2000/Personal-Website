import CSharpProgramming from "../../assets/c-sharp.png";
import CProgrammingLanguage from "../../assets/c-programming.png";
import CPlusPlus from "../../assets/c++-programming.png";
import TypeScriptProgramming from "../../assets/typescript-programming.png";
import JavascriptProgramming from "../../assets/js-programming.png";
import ReactProgramming from "../../assets/react-programming.png";

interface backend {
  name: string;
  level: string;
}

interface frontend {
  name: string;
  level: string;
}

interface Gaming {
  name: string;
  level: string;
}

interface technology {
  path: string;
  alt: string;
}

function experience() {
  const backendSkills: backend[] = [
    {
      name: "Node.js",
      level: "experienced",
    },
    {
      name: "Express.js",
      level: "experienced",
    },
    {
      name: "MongoDB",
      level: "experienced",
    },
    {
      name: "JavaScript",
      level: "experienced",
    },
    {
      name: "TypeScript",
      level: "experienced",
    },
    {
      name: "WinUI",
      level: "Intermediate",
    },
  ];

  const frontendSkills: frontend[] = [
    {
      name: "HTML",
      level: "experienced",
    },
    {
      name: "CSS",
      level: "experienced",
    },
    {
      name: "React",
      level: "experienced",
    },
  ];
  const gamingSkills: Gaming[] = [
    {
      name: "opengl",
      level: "Intermediate",
    },
    {
      name: "Unity",
      level: "Intermediate",
    },
  ];

  const technologies: technology[] = [
    {
      path: CProgrammingLanguage,
      alt: "C programming language",
    },
    {
      path: CSharpProgramming,
      alt: "C# programming language",
    },
    {
      path: CPlusPlus,
      alt: "C++ programming language",
    },
    {
      path: TypeScriptProgramming,
      alt: "TypeScript programming language",
    },
    {
      path: JavascriptProgramming,
      alt: "Javascript programming language",
    },

    {
      path: ReactProgramming,
      alt: "React programming language",
    },
  ];

  return (
    <>
      <div
        className="experience-header about-header flex text-center flex-col text-gray-500 p-6 "
        id="experience"
      >
        <h5>Explore My</h5>
        <h1 className="text-black font-semibold text-3xl">Experience</h1>
      </div>
      <div className="experience-content flex flex-col md:flex-row justify-around flex-wrap p-4">
        <div className="md:w-[30%] p-4 mb-5 border border-gray-500 rounded-xl ">
          <h1 className="text-gray-500 font-semibold text-center">
            Frontend Development
          </h1>
          <div className="experience-body flex justify-around flex-wrap">
            {frontendSkills.map((skill, index) => (
              <div
                className="experience-body-content flex text-center flex-row align-middle mb-5 mt-5 bg-[#b2b2b2] border border-gray-200 p-4 rounded-md "
                key={index}
              >
                <i className="fa-solid fa-square-check text-gray-500"></i>

                <div className="flex flex-col">
                  <h3 className="text-white">{skill.name}</h3>
                  <h4 className="text-gray-500">{skill.level}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[30%] p-4 mb-5 border border-gray-500 rounded-xl ">
          <h1 className="text-gray-500 font-semibold text-center">
            Backend Development
          </h1>
          <div className="experience-body flex justify-around flex-wrap">
            {backendSkills.map((skill, index) => (
              <div
                className="experience-body-content flex text-center flex-row align-middle mb-5 mt-5 bg-[#b2b2b2] border-gray-200 p-4 rounded-md"
                key={index}
              >
                <i className="fa-solid fa-square-check text-gray-500"></i>

                <div className="flex flex-col">
                  <h3 className="text-white">{skill.name}</h3>
                  <h4 className="text-gray-500">{skill.level}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[30%] p-4 mb-5 border border-gray-500 rounded-xl ">
          <h1 className="text-gray-500 font-semibold text-center">
            Game Development
          </h1>
          <div className="experience-body flex justify-around flex-wrap">
            {gamingSkills.map((skill, index) => (
              <div
                className="experience-body-content flex text-center flex-row align-middle mb-5 mt-5 bg-[#b2b2b2] border border-gray-200 p-4 rounded-md"
                key={index}
              >
                <i className="fa-solid fa-square-check text-gray-500 mr-2"></i>
                <div className="flex flex-col">
                  <h3 className="text-white ">{skill.name}</h3>
                  <h4 className="text-gray-500">{skill.level}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="technologies-comfortable-with p-2 w-full">
        <div className="technologies-container md:w-full flex flex-row flex-wrap justify-around">
          {technologies.map((tech, index) => (
            <img
              src={tech.path}
              alt={tech.alt}
              key={index}
              className="h-[5%] w-[5%]"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default experience;
