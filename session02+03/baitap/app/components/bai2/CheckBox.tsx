import React from "react";

export default function CheckBox() {
  return (
    <div className="w-80 p-2 border border-purple-500 rounded-md">
      <label className="block text-sm font-medium text-black">
        Input Label
      </label>
      <div className="relative mt-1">
        <input
          className="w-full border border-blue-400 p-2 pl-10 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder=""
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
          <span className="material-symbols-outlined">more_time</span>
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <span className="material-symbols-outlined">stat_minus_1</span>
        </span>
      </div>
      <div className="mt-2 border border-purple-500 rounded-md p-2">
        <div className="flex items-center justify-between">
          <label className="text-black">Label</label>
          <input type="checkbox" className="form-checkbox text-blue-600" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-black">Label</label>
          <input type="checkbox" className="form-checkbox text-blue-600" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-black">Label</label>
          <input type="checkbox" className="form-checkbox text-blue-600" />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-black">Label</label>
          <input type="checkbox" className="form-checkbox text-blue-600" />
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <button className="px-4 py-2 border border-gray-400 rounded text-gray-700">
          Clear
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Apply
        </button>
      </div>
    </div>
  );
}
