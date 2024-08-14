"use client";
import React, { useState } from "react";

interface Props {
    options: any
    value: any
    handleChange: any
}
export default function Select({options, value, handleChange}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const onOptionClick = (option: any) => {
    handleChange(option);
    setIsOpen(false);
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Môn học</h1>
      <div className="relative w-64">
        <div
          className="bg-gray-100 p-2 border border-gray-300 rounded cursor-pointer flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <span>{value.label || "Chọn môn học"}</span>
          <span className="text-sm">&#9660;</span>
        </div>
        {isOpen && (
          <div className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded shadow-lg z-10 max-h-48 overflow-y-auto">
            {options.map((option: any) => (
              <div
                key={option.value}
                className={`p-2 cursor-pointer hover:bg-gray-200 ${
                  value.value === option.value ? "bg-gray-200" : ""
                } flex justify-between items-center`}
                onClick={() => onOptionClick(option)}
              >
                <span>{option.label}</span>
                {value.value === option.value && (
                  <span className="text-blue-500">✔</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
