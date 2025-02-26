// import React, { useState } from "react";
import "./hero.css";
import Me from "../../assets/meNoBg.jpg";
import { Link } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import Modal from "../recaptcha/modal";
// import cv from "../../assets/CV.pdf";

interface Profile {
  path: string;
  alt: string;
}

const Hero: React.FC = () => {
  // const [isVerified, setIsVerified] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const personalProfile: Profile = {
    path: Me,
    alt: "Hero image of Lewis Ng'ang'a the owner of the website",
  };

  // const RECAPTCHA_SITE_KEY = "6LdsugQqAAAAAKWssgyvKhqahfYjrLQQaSxnCw7b";

  // const handleRecaptchaChange = (value: string | null) => {
  //   if (value) {
  //     setIsVerified(true);
  //     setIsModalOpen(false); // Close the modal on successful verification
  //     console.log("reCAPTCHA verification successful");

  //     // Initiate download immediately
  //     initiateDownload();
  //   }
  // };

  // const initiateDownload = () => {
  //   console.log("Initiating download...");

  //   const link = document.createElement("a");
  //   link.href = cv; // Ensure cv points to the correct file path
  //   link.download = "CV.pdf"; // Set the file name for download

  //   // Append the link to the body to trigger the download
  //   document.body.appendChild(link);

  //   // Programmatically click the link to initiate download
  //   link.click();

  //   // Clean up: remove the link after download begins
  //   document.body.removeChild(link);
  // };

  // const handleDownload = () => {
  //   if (!isVerified) {
  //     setIsModalOpen(true); // Open the reCAPTCHA modal if verification fails
  //   } else {
  //     initiateDownload(); // Initiate download if already verified
  //   }
  // };

  return (
    <>
      <div
        className="hero-container flex flex-col-reverse md:flex-row w-full h-auto pl-4 pr-4"
        id="hero"
      >
        <div className="hrr1 md:w-[50%] flex align-middle flex-col">
          <div className="image-container w-full flex justify-center align-middle">
            <div className="hrr1-ct h-44 w-44  rounded-[50%] mt-16  overflow-hidden shadow-lg shadow-gray-500">
              <img
                src={personalProfile.path}
                alt={personalProfile.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="intro flex justify-center align-middle flex-col mt-10  text-gray-500 leading-loose text-center">
            <h5 className="text-md">Hello i'm</h5>
            <h1 className="font-extrabold text-2xl text-black ">
              Lewis Ng'ang'a
            </h1>

            <h3 className="font-sm">Full Stack Developer</h3>

            <div className="document-group flex justify-center mt-3">
              {/* <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-2 border-gray-400 rounded-full shadow mr-3 hidden"
                onClick={handleDownload}
              >
                Download CV
              </button> */}
              <Link to="/contact">
                <button className="bg-gray-500 border-2 hover:border-2 hover:border-gray-500 hover:bg-transparent hover:text-gray-500 hover:shadow-xl text-white font-bold py-2 px-4 rounded-full ">
                  Contact Info
                </button>
              </Link>
            </div>
            <div className="social-group flex justify-center mt-5 text-3xl">
              <a
                title="github Link"
                href="https://github.com/lewis-2000"
                className="mr-3"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                title="Instagram Link"
                href="https://www.instagram.com/lewis_nganga_n/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="hrr2 h-auto md:w-[50%]"></div>
      </div>
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleRecaptchaChange}
        />
      </Modal> */}
    </>
  );
};

export default Hero;
