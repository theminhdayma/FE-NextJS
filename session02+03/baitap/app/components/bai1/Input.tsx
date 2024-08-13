import React from "react";

export default function Input() {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-blue-600 text-sm">Label</label>
      <div className="relative">
        <input
          className=" border border-blue-400 p-2 pl-3 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Placeholder"
        />
        <div className="w-[250px]">
          <span className="absolute top-2 left-[220px] flex text-gray-400 material-symbols-outlined">
            visibility
          </span>
        </div>
      </div>
      <p className="text-gray-500 text-sm">Helper Text</p>
    </div>
  );
}
