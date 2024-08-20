"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Post() {
  const [inputValue, setInputValue] = useState<string>("");
  const routes = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleClick = () => {
    console.log("giá trị tìm kiếm: ", inputValue);
    routes.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };

  // Bài 2: Lấy giá trị từ trên URL
  const searchParam = useSearchParams();
  const search = searchParam.get("search");
  return (
    <>
      <div>Search Value: {search}</div>
      <div className="flex gap-3">
        <input
          value={inputValue}
          onChange={handleChange}
          className="border border-black rounded-lg p-2"
          type="text"
        />
        <button
          onClick={handleClick}
          className="bg-black text-white p-2 rounded-lg"
        >
          Tìm kiếm
        </button>
      </div>
    </>
  );
}
