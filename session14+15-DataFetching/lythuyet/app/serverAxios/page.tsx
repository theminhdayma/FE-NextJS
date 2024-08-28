import axios from "axios";
import React from "react";

async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}

export default async function page() {
  // Tạo function lấy dữ liệu ở trên server
  const users = await getData();
//   console.log(users);

  return (
    <div>
      Data fetching server with axios
      {users.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
