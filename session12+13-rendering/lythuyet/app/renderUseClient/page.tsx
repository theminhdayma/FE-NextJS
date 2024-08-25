"use client";

import { useEffect, useState } from "react";

/*
    Render dữ liệu use client 
*/
async function fetchData() {
  const res = await fetch("");
  const data = await res.json();
  return data;
}
export default function page() {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    // Đi lấy data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const sayHello = () => {
    alert("Say hello");
  };
  return (
    <>
      {users?.map((item: any) => (
        <ul>
          <li>{item.name}</li>
          {/* <button onClick={sayHello}>Say hello</button> */}
        </ul>
      ))}
    </>
  );
}
