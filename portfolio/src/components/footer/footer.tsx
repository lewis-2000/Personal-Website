function footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow-md shadow-gray-500 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg">
                Contact Me
              </button>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#about" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:underline me-4 md:me-6">
                  Experience
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <h1 className="font-semibold text-2xl text-black">
              Lewis{" "}
              <span className="text-gray-500 border-teal-300">Nganga</span>
            </h1>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default footer;
