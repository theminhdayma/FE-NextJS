"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      Trang danh sách user
      {users.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
