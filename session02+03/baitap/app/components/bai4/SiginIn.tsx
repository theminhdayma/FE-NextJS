import React from "react";

export default function SignIn() {
  return (
    <div className="w-[450px] flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-[400px] bg-white p-8 rounded-lg shadow-md max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Form Sign in</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="email"
            placeholder="you@company.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone number
          </label>
          <div className="flex">
            <select className="p-2 border border-gray-300 rounded-l-md bg-gray-50">
              <option value="US">US</option>
              <option value="VN">VN</option>
            </select>
            <input
              className="w-full p-2 border border-gray-300 rounded-r-md"
              type="tel"
              placeholder="+84 (123) 456-789"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={3}
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Skills
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input type="checkbox" id="html" />
              <label htmlFor="html" className="ml-2 text-gray-700">
                HTML
              </label>
            </div>
            <div>
              <input type="checkbox" id="javascript" />
              <label htmlFor="javascript" className="ml-2 text-gray-700">
                JavaScript
              </label>
            </div>
            <div>
              <input type="checkbox" id="ux" />
              <label htmlFor="ux" className="ml-2 text-gray-700">
                UX design
              </label>
            </div>
            <div>
              <input type="checkbox" id="react" />
              <label htmlFor="react" className="ml-2 text-gray-700">
                ReactJS
              </label>
            </div>
            <div>
              <input type="checkbox" id="css" />
              <label htmlFor="css" className="ml-2 text-gray-700">
                CSS
              </label>
            </div>
            <div>
              <input type="checkbox" id="java" />
              <label htmlFor="java" className="ml-2 text-gray-700">
                Java
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
