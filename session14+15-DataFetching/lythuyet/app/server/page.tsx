"use client"; // Chỉ định đây là một component client-side

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default function DataFetching() {
  const [users, setUsers] = useState([]); // State để lưu dữ liệu người dùng
  const router = useRouter(); // Sử dụng useRouter cho điều hướng client-side

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(); // Lấy dữ liệu từ API
      setUsers(data); // Cập nhật state với dữ liệu đã lấy
    };

    fetchData(); // Gọi hàm fetchData khi component được mount
  }, []);

  const handleClick = () => {
    router.push("/useswr"); // Điều hướng tới trang khác
  };

  return (
    <div>
      Data fetching server with fetch
      <button onClick={handleClick}>Click</button>
      <ul>
        {users.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
