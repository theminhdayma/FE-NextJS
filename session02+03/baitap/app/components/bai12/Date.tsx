"use client";
import React, { useState } from "react";
import moment from "moment"

export default function Date() {
    const [currentDate, setCurrentDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState(moment());
  
    const daysInMonth = currentDate.daysInMonth();
    const startOfMonth = currentDate.startOf("month").day();
    const previousMonthDays = moment(currentDate).subtract(1, 'months').daysInMonth();
    
    const handlePreviousMonth = () => {
      setCurrentDate(moment(currentDate).subtract(1, "months"));
    };
  
    const handleNextMonth = () => {
      setCurrentDate(moment(currentDate).add(1, "months"));
    };
  
    const handleSetDate = () => {
      setSelectedDate(moment());
      setCurrentDate(moment());
    };
  
    const handleDateSelect = (day: number) => {
      setSelectedDate(moment(currentDate).date(day));
    };
  
    const renderDays = () => {
      const days = [];
      for (let i = 0; i < startOfMonth; i++) {
        days.push(
          <div
            key={`prev-${i}`}
            className="text-gray-400 flex justify-center items-center"
          >
            {previousMonthDays - startOfMonth + 1 + i}
          </div>
        );
      }
      for (let i = 1; i <= daysInMonth; i++) {
        const isSelected = i === selectedDate.date() && currentDate.isSame(selectedDate, "month");
        days.push(
          <div
            key={i}
            className={`cursor-pointer flex justify-center items-center ${
              isSelected ? "bg-green-500 text-white rounded-full" : ""
            }`}
            onClick={() => handleDateSelect(i)}
          >
            {i}
          </div>
        );
      }
      return days;
    };
  
    return (
      <div className="p-4 w-[300px] mx-auto bg-white rounded shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePreviousMonth}>&#10094;</button>
          <h2 className="text-lg font-semibold">{currentDate.format("MMMM YYYY")}</h2>
          <button onClick={handleNextMonth}>&#10095;</button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div key={day} className="text-center font-semibold">{day}</div>
          ))}
          {renderDays()}
        </div>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded"
            onClick={handleSetDate}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleSetDate}
          >
            Set date
          </button>
        </div>
      </div>
    );
}
