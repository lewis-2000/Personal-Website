import CodeCup from "../../assets/code-cup.png";
interface Content {
  path: string;
  alt: string;
}

interface Experience {
  name: string;
  years: number;
  description: string;
}

function About() {
  const aboutContent: Content = {
    path: CodeCup,
    alt: "A cup with the infamous tags printed on it",
  };

  const experiences: Experience[] = [
    {
      name: "Full Stack Developer",
      years: 4,
      description: "I am a Full Stack Developer",
    },
    {
      name: "MicroController Developer",
      years: 3,
      description: "I developed for the raspberry pi and Arduino",
    },
  ];

  return (
    <>
      <div
        className="about-header flex h-auto w-full flex-col p-4 text-center text-gray-500 md:h-[100vh]"
        id="about"
      >
        <h5>Get to know More</h5>
        <h1 className="text-[#554838] font-semibold text-3xl">About Me</h1>
        <div className="about-content w-full md:h-full flex flex-col md:flex-row">
          <div className="about-image md:w-[50%] md:h-full flex justify-center">
            <img
              src={aboutContent.path}
              alt={aboutContent.alt}
              className="md:h-full md:w-full object-center object-contain h-[50%] w-[50%]"
            />
          </div>

          <div className="about-info w-full h-auto md:w-[50%] md:h-[100%] flex flex-col ">
            <div className="about-card-container w-full h-auto flex flex-col md:flex-row md:justify-around mt-10">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full h-auto bg-transparent border border-gray-500 p-4 mb-4 rounded-md md:w-[45%]"
                >
                  <div className="flex items-center mb-4 justify-center ">
                    <i className="fas fa-graduation-cap text-black mr-2"></i>
                    <h1 className="text-[#554838] font-bold">Experience</h1>
                  </div>
                  <div className="text-gray-500 mb-4">
                    <h2 className="font-bold">{experience.name}</h2>
                    <p>{experience.description}</p>
                    <span>{experience.years} years</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-description pr-3">
              <p className="text-gray-500">
                With over 4 years of experience as a Full Stack Developer, I
                have honed my skills in both front-end and back-end
                technologies, building robust and scalable applications.
                Additionally, I have 3 years of experience as a MicroController
                Developer, where I developed innovative solutions for Raspberry
                Pi and Arduino platforms. My passion for technology extends
                beyond development; I have competed in the National Robotics
                competitions three times and proudly represented my skills on a
                continental level at Startup Africa. These experiences have not
                only enhanced my technical expertise but also fueled my
                commitment to continuous learning and innovation in the tech
                industry ... <i className="fa-solid fa-pen-fancy"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
