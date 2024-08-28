"use client";
import axios from "axios";
import React from "react";
import useSWR from "swr";

// Định nghĩa hàm fetcher với async/await
const fetcher = async (url: string) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

export default function Page() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return <div>Tải dữ liệu thất bại</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      sử dụng SWR
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
