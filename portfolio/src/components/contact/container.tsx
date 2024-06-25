import React, { useState } from "react";

function Container() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:flammylewis2000@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="container mx-auto p-4 ">
      <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h1 className="text-2xl font-bold text-black">Contact Me</h1>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-gray-500">flammylewis2000@outlook.com</span>
            <a
              href="mailto:flammylewis2000@outlook.com"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Use Mailer
            </a>
          </div>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-transparent shadow-md shadow-gray-500 rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg mx-auto "
      >
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline shadow-gray-500"
            placeholder="Enter subject"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="body"
          >
            Message
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline shadow-gray-500"
            placeholder="Enter your message"
            rows={6}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Container;
